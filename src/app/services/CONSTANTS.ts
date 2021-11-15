export const TMDB = 'https://api.themoviedb.org/3'
export const BACKDROP_ROOT = 'https://image.tmdb.org/t/p/original'

export enum TITLE_ENDPOINTS {
    latest = '/movie/latest',
    top_rated = '/movie/top_rated',
    popular = '/movie/popular',
    trending = '/trending/all/week',
    now_playing = '/movie/now_playing',
    upcoming = '/movie/upcoming',
}

export enum ENDPOINT_NAMES {
    latest = 'Latest',
    top_rated = 'Top Rated',
    popular = 'Popular',
    trending = 'Trending This Week',
    now_playing = 'Now Playing',
    upcoming = 'Coming Soon',
}
