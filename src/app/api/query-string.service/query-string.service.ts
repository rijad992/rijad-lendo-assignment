import { Injectable } from '@angular/core';
import { forEach, merge } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class QueryStringService {
  static DEFAULT_PARAMS = {
    include_adult: false
  }
  constructor() { }

  composeQueryString(params: object): string {
    let qsObject = merge(params, QueryStringService.DEFAULT_PARAMS);
    let qs = [];

    forEach(qsObject, (val, key) => {
      qs.push(`${key}=${val}`);
    });

    let out = qs.length ? `&${qs.join('&')}` : '';

    console.log('qs', out);
    return out;
  }
}
