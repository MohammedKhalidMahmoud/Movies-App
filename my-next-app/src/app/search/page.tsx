"use client";

import axios from "axios";

function search(){
  // e.preventDefault();    
    const searchTerm="fuck";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=439a143cbf0
a0e823ff8a1afbf446819&query=${searchTerm}`;
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
    
export default function Home(){
    return(
        <div>
            
        <input type="text" />
        <button onClick={search}>Search</button>
        </div>
    );
}
 