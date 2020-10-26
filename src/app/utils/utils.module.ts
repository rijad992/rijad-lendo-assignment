import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './orderby.pipe/orderby.pipe';



@NgModule({
  declarations: [OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [OrderByPipe]
})
export class UtilsModule { }
