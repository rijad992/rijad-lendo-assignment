import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvshowsRoutingModule } from './tvshows-routing.module';
import { TvshowsComponent } from './tvshows.component';
import { NavigationModule } from '../navigation/navigation.module';


@NgModule({
  declarations: [TvshowsComponent],
  imports: [
    CommonModule,
    TvshowsRoutingModule,
    NavigationModule
  ]
})
export class TvshowsModule { }
