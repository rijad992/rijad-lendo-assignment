import { Injectable } from '@angular/core';
import { forEach } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class QueryStringService {
  static DEFAULT_PARAMS = {
    include_adult: false
  }
  constructor() { }

  composeQueryString(params: object): string {
    let qsObject = Object.assign(params, QueryStringService.DEFAULT_PARAMS);
    let qs = [];

    forEach(qsObject, (val, key) => {
      console.log(val, key)
      qs.push(`${key}=${val}`);
    });

    let out = qs.length ? `&${qs.join('&')}` : '';

    return out;
  }
}
