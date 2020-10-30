import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component/card/card.component';
import { NoResultsComponent } from './noresults.component/no-results.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    CardComponent, 
    NoResultsComponent, 
    PaginationComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [
    CardComponent,
    NoResultsComponent,
    PaginationComponent
  ]
})
export class SharedComponentsModule { }
