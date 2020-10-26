import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvshowsRoutingModule } from './tvshows-routing.module';
import { TvshowsComponent } from './tvshows.component/tvshows.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ApiModule } from '../api/api.module';
import { UtilsModule } from '../utils/utils.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { TvshowsService } from './tvshows.service/tvshows.service';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [TvshowsComponent],
  imports: [
    CommonModule,
    TvshowsRoutingModule,
    NavigationModule,
    ApiModule,
    UtilsModule,
    SharedComponentsModule,
    SearchModule
  ],
  providers: [TvshowsService]
})
export class TvshowsModule { }
