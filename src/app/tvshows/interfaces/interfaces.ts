export interface TopRatedExtResponse {
    results: TopRatedTvshowsResponse[]
}

export interface TopRatedTvshowsResponse {
    name: string,
    vote_average: number
}

export interface TvshowsSearchQueryParams {
    query: string;
}