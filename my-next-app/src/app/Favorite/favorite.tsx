import axios from "axios";

import { Movie } from '@/interfaces/movieInterface';

// async function getcachedMovies(): Promise<Movie[]> {
//   try {
//     const response = await axios.get(
//       'https://api.themoviedb.org/3/trending/all/day?api_key=439a143cbf0a0e823ff8a1afbf446819'
//     );
//     return response.data.results;
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return [];
//   }
// }

export default async function Home() {
  const movies = JSON.parse(localStorage.getItem("movie")) || [];
  // {console.log(movies);}
  return (
    <main>
      <CardList movies={movies} />
    </main>
  );
}