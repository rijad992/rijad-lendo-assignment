import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { TopRatedMoviesResponse } from '../interfaces/interfaces';

import { MoviesService } from '../movies.service/movies.service';
import { SearchService } from '../../search/search.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMovies implements OnInit {
  list$: Observable<TopRatedMoviesResponse[]>;
  listToView$: Observable<TopRatedMoviesResponse[]>;

  constructor(private api: MoviesService, private searchService: SearchService) { }

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
