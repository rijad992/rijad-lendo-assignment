import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { TvshowsService } from '../tvshows.service/tvshows.service';
import {
  TvshowDetailsBackDrops,
  TvshowDetailsResponse,
  TvshowDetailsTrailerResponse
} from '../interfaces/interfaces';


interface MovieDetailsExtResponse extends TvshowDetailsResponse {
  trailers: TvshowDetailsTrailerResponse[],
  backdrops: TvshowDetailsBackDrops[]
};
@Component({
  selector: 'app-detail-tvshows',
  templateUrl: './detail-tvshows.component.html',
  styleUrls: ['./detail-tvshows.component.scss']
})
export class DetailTvshowsComponent implements OnInit {

  id: number;
  show$: Observable<MovieDetailsExtResponse>;

  private static videoHost = {
    'YouTube': {
      url: 'https://www.youtube.com/embed',
      qs: '?autoplay=1&mute=1&loop=1&disablekb=1&modestbranding=1'
    }
  }

  constructor(private route: ActivatedRoute, private api: TvshowsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.show$ = this.route.params.pipe(
      switchMap(params => {
        return forkJoin([
          this.api.getDetail(params['id']),
          this.api.getDetailVideos(params['id']),
          this.api.getDetailImages(params['id'])
        ])
      }),
      map(([s1, s2, s3]) => Object.assign(s1, { trailers: s2 }, { backdrops: s3 }))
    );

  }

  resolveVideoUrl(host: string, urlCode: string): SafeResourceUrl {
    const url = DetailTvshowsComponent.videoHost[host].url;
    const qs = DetailTvshowsComponent.videoHost[host].qs || '';
    let videoUrl: SafeResourceUrl;

    videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}/${urlCode}${qs ? qs : ''}`);
    return videoUrl;
  }
}
