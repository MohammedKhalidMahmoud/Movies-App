"use client";

import axios from "axios";
import { useState } from "react";
import {Movie} from "../../interfaces/movieInterface";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (!searchTerm.trim()) return; // Don't search if empty
    
    setLoading(true);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=439a143cbf0a0e823ff8a1afbf446819&query=${encodeURIComponent(searchTerm)}`;
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit" disabled={loading || !searchTerm.trim()}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Display search results */}
      <div className="movie-results">
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.name}</h3>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.name}
              />
            )}
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}