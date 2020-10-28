import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component/card/card.component';
import { NoResultsComponent } from './noresults.component/no-results.component';

@NgModule({
  declarations: [CardComponent, NoResultsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    NoResultsComponent
  ]
})
export class SharedComponentsModule { }
