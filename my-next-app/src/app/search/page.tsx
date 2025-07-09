"use client";

// import axios from "axios";
import { useEffect, useState } from "react";
import {Movie} from "../../Interfaces/movieInterface";
import Img from "next/image";
const Link = (await import('next/link')).default; // Link is imported dynamically (when needed)
const CardList = (await import("../(components)/CardList/page")).default; // CardList is imported dynamically (when needed)

export default function Home() {
  //state
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  // const image_url=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  //functions
  const handleSearch = async (e: Event) => {
    e.preventDefault(); // Prevent page reload
    if (!searchTerm.trim()) return; // Don't search if the search term is empty
    setSearched(true);
    setLoading(true);
    const axios = (await import('axios')).default;  // axios library is imported dynamically (when needed)
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=439a143cbf0a0e823ff8a1afbf446819&query=${encodeURIComponent(searchTerm)}`;
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } 
    setLoading(false);
  };


  return (
    <div className="">
      <form onSubmit={handleSearch} className="mt-30-p mb-10 search-form">
        <input
          className="w-250 px-10 py-5 ml-10 font-18 rounded-10 mr-10"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="movie name"
        />
        <button type="submit" className="px-10 py-5 rounded-8 bg-blue border-none text-white font-18" disabled={loading || !searchTerm.trim()}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    {
      !movies.length && searched && !loading &&
        <div className="text-center font-xxl bold text-blue absolute top-50-p left-50-p translate-middle">No Movies Found</div>
      
    }
      
      <div className="movie-results">
        {movies.map((movie: Movie) => (
           <CardList movies={movies} className="mt-60"/>
          
        ))}
      </div>
    </div>
  );
}


