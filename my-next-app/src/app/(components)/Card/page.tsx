
"use client"
import SVG from "../../(utils)/Star/page"
import Img from "next/image";
import { Movie } from "@/interfaces/movieInterface"
import Link from 'next/link';
export default function Home({movie} : Movie){
    let image_url=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    let arr:object[]=new Array();
    function push_to_local(e){
        e.preventDefault();
        // arr.push(movie);
        // console.log(arr);
       let existingMovies = JSON.parse(localStorage.getItem("movie")) || [];
        localStorage.setItem("movie", JSON.stringify([...(existingMovies), movie]))
        
    }
     return (
    <div className="movie-card w-">
      <Link href={`/carddetails/${movie.id}`}>
        <Img 
          width={200}
          height={300}
          src={movie.poster_path} 
          alt={movie.title || movie.name || 'Movie poster'} 
          className="movie-card__image w-200"
        />
      </Link>
      <div className="movie-card__content">
        <h3 className="movie-card__title">
          {movie.title || movie.name}
        </h3>
        <div className="movie-card__rating">
          <span className="movie-card__rating-star">★</span>
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
      <button className="bg-c-blue text-white w-full">Add to Favorite</button>
    </div>
  );
}