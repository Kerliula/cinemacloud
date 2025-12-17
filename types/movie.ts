export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string | null;
  vote_average: number;
}

export interface MovieListResponse {
  results: Movie[];
}
