// "use client";

import axios from "axios";
import CardList from "./(components)/CardList/page";
import { Movie } from '@/interfaces/movieInterface';
import {toast } from "react-toastify";

function search(){
  // e.preventDefault();
  const searchTerm="hello";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=439a143cbf0a0e823ff8a1afbf446819&query=${searchTerm}`;
  axios.get(url)
    .then((response) => {
      const movies = response.data.results;
      console.log(movies);
    }
    )
    .catch((error) => {
      console.error("Error fetching movies:", error);
    }
    );
}
async function getTrendingMovies(): Promise<Movie[]> {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=439a143cbf0a0e823ff8a1afbf446819'
    );
    // toast.success("Trending movies loaded successfully!");
    return response.data.results;
    
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
  
export default async function Home() {
  const movies = await getTrendingMovies();
  // {console.log(movies);}
  return (
    <>
   
     
    <main className="mt-70">
      
      <CardList movies={movies} className="mt-60"/>
    </main>
    </>
    
  );
}