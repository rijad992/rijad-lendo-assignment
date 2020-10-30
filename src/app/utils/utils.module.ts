import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './orderby.pipe/orderby.pipe';
import { ImageFallbackDirective } from './image-fallback.directive/image-fallback.directive';



@NgModule({
  declarations: [OrderByPipe, ImageFallbackDirective],
  imports: [
    CommonModule
  ],
  exports: [
    OrderByPipe,
    ImageFallbackDirective
  ]
})
export class UtilsModule { }
