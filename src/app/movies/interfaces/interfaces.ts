export interface TopRatedExtResponse {
    results: TopRatedMoviesResponse[]
}

export interface TopRatedMoviesResponse {
    title: string,
    vote_average: number
}

export interface MovieSearchQueryParams {
    query: string;
}