// "use client";

import axios from "axios";
import CardList from "./(components)/CardList/page";
import { Movie } from '@/interfaces/movieInterface';

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
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
  // let arr:object[]=new Array();
  // function push_to_local(e,arr){
  //       e.preventDefault();
  //       // arr.push(movie);
  //       // console.log(arr);
  //       // localStorage.setItem("movie", JSON.stringify(arr))
        
  //   }
export default async function Home() {
  const movies = await getTrendingMovies();
  // {console.log(movies);}
  return (
    <>
   
     
    <main>
      
      <CardList movies={movies} />
    </main>
    </>
    
  );
}