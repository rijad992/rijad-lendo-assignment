import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private keywordSource = new BehaviorSubject<string>('');
  currentKeyword = this.keywordSource.asObservable();
  
  constructor() { }

  keywordChanged(keyword: string): void {
    this.keywordSource.next(keyword);
  }
}
