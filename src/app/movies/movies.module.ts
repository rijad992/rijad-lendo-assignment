import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component/movies.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ApiModule } from '../api/api.module';
import { UtilsModule } from '../utils/utils.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MoviesService } from './movies.service/movies.service';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NavigationModule,
    ApiModule,
    UtilsModule,
    SharedComponentsModule
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
