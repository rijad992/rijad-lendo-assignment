import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMovies } from './list-movies.component/list-movies.component';
import { DetailMoviesComponent } from './detail-movies.component/detail-movies.component';

const routes: Routes = [
  { path: '', component: ListMovies, data:{showTopbar: true} },
  { path: ':id', component: DetailMoviesComponent, data:{showTopbar: false}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
