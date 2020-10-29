export interface TopRatedExtResponse {
    results: TopRatedMoviesResponse[];
    total_pages: number;
}

export interface TopRatedMoviesResponse {
    title: string;
    vote_average: number;
}

export interface MovieSearchQueryParams {
    query: string;
    page: number;
}
export interface MovieDetailsResponse {
    name: string;
    vote_average: number;
}

export interface MovieDetailsVideosExtResponse {
    id : number;
    results: MovieDetailsTrailerResponse[];
}

export interface MovieDetailsTrailerResponse {
    id: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
}

export interface MoveDetailsImagesExtResponse {
    id: number,
    backdrops: MovieDetailsBackDrops[];
}

export interface MovieDetailsBackDrops {
    aspect_ratio: number;
    file_path: string;
    height: number;
    width: number;
}