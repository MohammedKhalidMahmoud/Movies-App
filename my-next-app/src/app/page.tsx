// "use client";

import axios from "axios";
import CardList from "./(components)/CardList/page";
import { Movie } from '@/Interfaces/movieInterface';
import { Children } from "react";
// import {toast } from "react-toastify";



// function search() {
//   // e.preventDefault();
//   const searchTerm="hello";
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=439a143cbf0a0e823ff8a1afbf446819&query=${searchTerm}`;
//   // axios.get(url)
//   //   .then((response) => {
//   //     const movies = response.data.results;
//   //     console.log(movies);
//   //   }
//   //   )
//   //   .catch((error) => {
//   //     console.error("Error fetching movies:", error);
//   //   }
//   //   );
// }

  
export default async function Home({children}:{children:Movie[]}) {
  
  return (
    <>
   
    <main className="mt-70">
      <CardList movies={children}></CardList>
    </main>
    </>
    
  );
}


