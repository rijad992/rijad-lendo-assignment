import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { MoviesService } from '../movies.service/movies.service';
import {
  MovieDetailsBackDrops,
  MovieDetailsResponse,
  MovieDetailsTrailerResponse
} from '../interfaces/interfaces';


interface MovieDetailsExtResponse extends MovieDetailsResponse {
  trailers: MovieDetailsTrailerResponse[],
  backdrops: MovieDetailsBackDrops[]
};
@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.scss']
})
export class DetailMoviesComponent implements OnInit {

  id: number;
  movie$: Observable<MovieDetailsExtResponse>;

  private static videoHost = {
    'YouTube': {
      url: 'https://www.youtube.com/embed',
      qs: '?autoplay=1&mute=1&loop=1&disablekb=1&modestbranding=1'
    }
  }

  constructor(private route: ActivatedRoute, private api: MoviesService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
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
    const url = DetailMoviesComponent.videoHost[host].url;
    const qs = DetailMoviesComponent.videoHost[host].qs || '';
    let videoUrl: SafeResourceUrl;

    videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}/${urlCode}${qs ? qs : ''}`);
    return videoUrl;
  }
}
