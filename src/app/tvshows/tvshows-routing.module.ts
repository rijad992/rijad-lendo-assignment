import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvshowsComponent } from './tvshows.component/tvshows.component';


const routes: Routes = [{ path: '', component: TvshowsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowsRoutingModule { }
