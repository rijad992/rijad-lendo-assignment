import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { orderBy, slice } from 'lodash-es';

import { ApiService } from 'src/app/api/api.service/api.service';
import { Observable } from 'rxjs';
import { TvshowsSearchQueryParams, TopRatedExtResponse, TopRatedTvshowsResponse } from '../interfaces/interfaces';
import { QueryStringService } from 'src/app/api/query-string.service/query-string.service';


@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(private api: ApiService, private queryStringService: QueryStringService) { }

  getTopRated(): Observable<TopRatedTvshowsResponse[]> {
    return this.api.get<TopRatedExtResponse>('tv/top_rated')
      .pipe(
        map((res) => {
          return slice(orderBy(res.results, ['vote_average'], ['desc']), 0, 10)
        })
      );
  }

  searchMovies(queryParams: TvshowsSearchQueryParams): Observable<TopRatedTvshowsResponse[]> {
    let queryString = this.queryStringService.composeQueryString(queryParams);

    return this.api.get<TopRatedExtResponse>('search/tv', queryString)
      .pipe(
        map((res) => {
          return slice(orderBy(res.results, ['vote_average'], ['desc']), 0, 10)
        })
      );
  }

}
