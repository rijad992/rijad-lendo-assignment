import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { TopRatedTvshowsResponse } from '../interfaces/interfaces';

import { TvshowsService } from '../tvshows.service/tvshows.service';
import { SearchService } from '../../search/search.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  list$: Observable<TopRatedTvshowsResponse[]>;
  listToView$: Observable<TopRatedTvshowsResponse[]>;

  constructor(private api: TvshowsService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.currentKeyword
      .pipe(
        debounceTime(1000)
      )
      .subscribe(keyword => {
        if (keyword.length >= 3) {
          this.listToView$ = this.api.searchMovies({ query: encodeURIComponent(keyword) });
        } else {
          this.listToView$ = this.api.getTopRated();
        }
      });
  }
}