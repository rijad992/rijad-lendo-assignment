import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMovies } from './list-movies.component/list-movies.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ApiModule } from '../api/api.module';
import { UtilsModule } from '../utils/utils.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MoviesService } from './movies.service/movies.service';
import { DetailMoviesComponent } from './detail-movies.component/detail-movies.component';

@NgModule({
  declarations: [ListMovies, DetailMoviesComponent],
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
