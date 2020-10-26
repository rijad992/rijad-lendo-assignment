import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { QueryStringService } from './query-string.service/query-string.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    QueryStringService
  ]
})
export class ApiModule { }
