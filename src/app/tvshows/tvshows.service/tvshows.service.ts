import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { orderBy, slice } from 'lodash-es';

import { ApiService } from '../../api/api.service/api.service';
import { Observable } from 'rxjs';
import {
  TvshowsSearchQueryParams,
  TvshowsListExtResponse,
  TvshowDetailsResponse,
  TvshowDetailsTrailerResponse,
  TvshowDetailsBackDrops,
  TvshowDetailsImagesExtResponse,
  TvshowDetailsVideosExtResponse
} from '../interfaces/interfaces';
import { QueryStringService } from '../../api/query-string.service/query-string.service';


@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(private api: ApiService, private queryStringService: QueryStringService) { }

  getTopRated(): Observable<TvshowsListExtResponse> {
    return this.api.get<TvshowsListExtResponse>('tv/top_rated')
      .pipe(
        map((res) => {
          res.results = slice(orderBy(res.results, ['vote_average'], ['desc']), 0, 10);
          return res;
        })
      );
  }

  searchShows(queryParams: TvshowsSearchQueryParams): Observable<TvshowsListExtResponse> {
    let queryString = this.queryStringService.composeQueryString(queryParams);

    return this.api.get<TvshowsListExtResponse>('search/tv', queryString);
  }

  getDetail(id: number): Observable<TvshowDetailsResponse> {
    return this.api.get<TvshowDetailsResponse>(`tv/${id}`);
  }

  getDetailVideos(id: number): Observable<TvshowDetailsTrailerResponse[]> {
    return this.api.get<TvshowDetailsVideosExtResponse>(`tv/${id}/videos`).pipe(
      map(({ results }) => {
        return results.filter(r => r && r.type == 'Trailer');
      })
    );
  }

  getDetailImages(id: number): Observable<TvshowDetailsBackDrops[]> {
    let queryString = this.queryStringService.composeQueryString({ language: 'en,null' });

    return this.api.get<TvshowDetailsImagesExtResponse>(`tv/${id}/images`, queryString).pipe(
      map(({ backdrops }) => {
        return orderBy(backdrops, ['vote_average'], ['desc']);
      })
    );;
  }

}
