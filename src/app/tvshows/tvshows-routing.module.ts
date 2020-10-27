import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTvshowsComponent } from './list-tvshows.component/list-tvshows.component';


const routes: Routes = [{ 
  path: '', component: ListTvshowsComponent,
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowsRoutingModule { }
