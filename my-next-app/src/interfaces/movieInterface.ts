
export interface Movie {
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string; // Since this is a TV show, we narrow it
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string; // ISO format (YYYY-MM-DD)
  vote_average: number;
  vote_count: number;
  origin_country: string[]; // Array of country codes (e.g., "KR", "US")
}

