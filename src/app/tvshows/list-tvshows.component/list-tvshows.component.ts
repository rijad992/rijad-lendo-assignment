import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators'
import { TvshowsListExtResponse } from '../interfaces/interfaces';

import { TvshowsService } from '../tvshows.service/tvshows.service';
import { SearchService } from '../../search/search.service';

@Component({
  selector: 'app-list-tvshows',
  templateUrl: './list-tvshows.component.html',
  styleUrls: ['./list-tvshows.component.scss']
})
export class ListTvshowsComponent implements OnInit {
  listToView$: Observable<TvshowsListExtResponse>;
  searchSub: Subscription;
  currentPage: number = 1;
  searchKeyword: string = '';
  totalPages: number;
  resultsLength: number;

  constructor(private api: TvshowsService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchSub = this.searchService.currentKeyword
      .pipe(
        debounceTime(1000)
      )
      .subscribe(keyword => {
        if (this.searchKeyword != keyword) {
          this.currentPage = 1;
        }
        
        this.searchKeyword = keyword;
        if (keyword.length >= 3) {
          this.listToView$ = this.api.searchShows({ query: encodeURIComponent(keyword), page: this.currentPage }).pipe(
            tap(res => {
              this.totalPages = res.total_pages;
              this.resultsLength = res.results.length
            })
          );
        } else {
          this.listToView$ = this.api.getTopRated();
        }
      });
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  search(page: number): void {
    this.currentPage = page;
    this.listToView$ = this.api.searchShows({ query: encodeURIComponent(this.searchKeyword), page: page }).pipe(
      tap(res => {
        this.totalPages = res.total_pages;
        this.resultsLength = res.results.length
      })
    );
  }
}
