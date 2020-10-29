export interface TopRatedExtResponse {
    results: TopRatedTvshowsResponse[];
    total_pages: number;
}

export interface TopRatedTvshowsResponse {
    name: string,
    vote_average: number
}

export interface TvshowsSearchQueryParams {
    query: string;
    page: number;
}

export interface TvshowDetailsResponse {
    title: string,
    video: boolean,
    vote_average: number
}

export interface TvshowDetailsVideosExtResponse {
    id : number,
    results: TvshowDetailsTrailerResponse[],
    total_pages: number
}

export interface TvshowDetailsTrailerResponse {
    id: string,
    key: string,
    name: string,
    site: string,
    size: number,
    type: string
}

export interface TvshowDetailsImagesExtResponse {
    id: number,
    backdrops: TvshowDetailsBackDrops[]
}

export interface TvshowDetailsBackDrops {
    aspect_ratio: number,
    file_path: string,
    height: number,
    width: number
}