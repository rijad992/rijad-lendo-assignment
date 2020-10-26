import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { orderBy, slice } from 'lodash-es';

import { ApiService } from 'src/app/api/api.service/api.service';
import { Observable } from 'rxjs';
import { MovieSearchQueryParams, TopRatedExtResponse, TopRatedMoviesResponse } from '../interfaces/interfaces';
import { QueryStringService } from 'src/app/api/query-string.service/query-string.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private api: ApiService, private queryStringService: QueryStringService) { }
  
  getTopRated(): Observable<TopRatedMoviesResponse[]> {
    return this.api.get<TopRatedExtResponse>('movie/top_rated')
      .pipe(
        map((res) => {
          return slice(orderBy(res.results, ['vote_average'], ['desc']), 0, 10)
        })
      );
  }

  searchMovies(queryParams: MovieSearchQueryParams): Observable<TopRatedMoviesResponse[]> {
    let queryString = this.queryStringService.composeQueryString(queryParams);
    console.log('search')
    return this.api.get<TopRatedExtResponse>('search/movie', queryString)
      .pipe(
        map((res) => {
          return slice(orderBy(res.results, ['vote_average'], ['desc']), 0, 10)
        })
      );
  }

}
