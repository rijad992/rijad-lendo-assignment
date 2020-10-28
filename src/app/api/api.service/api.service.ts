import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  
  get<T>(endpoint: string, queryString?: string): Observable<T> {

    return this.http.get<T>(`${environment.apiUrl}/${endpoint}?api_key=${environment.apiKey}${queryString ? queryString : ''}`, {
      headers: this.headers
    });
  }

  //post

  //put

  //delete

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }
}
