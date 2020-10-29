import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTvshowsComponent } from './detail-tvshows/detail-tvshows.component';
import { ListTvshowsComponent } from './list-tvshows.component/list-tvshows.component';


const routes: Routes = [
  {path: '', component: ListTvshowsComponent, data: {showTopbar: true}},
  { path: ':id', component: DetailTvshowsComponent, data:{showTopbar: false}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowsRoutingModule { }
