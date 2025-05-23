
"use client"

import styles from "./page.module.css"
import SVG from "../../(utils)/Star/page"
import Img from "next/image";
// import {Roboto} from "next/font/google";
import { Movie } from "@/interfaces/movieInterface"
import Link from 'next/link';
// const roboto = Roboto({ weight: '400', subsets: ['latin'] });
export default function Home({movie} : Movie){
 
    const image_url=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
 
    function togglestars(e){
      e.target.classList.toggle("text-yellow");
      e.target.classList.toggle("text-gray");
    }

    function fetch_movies_form_local_storage(){

    }
    function remove_from_local(existingMovies : Movie[]){
      const movieIndex = existingMovies.findIndex((m:Movie) => m.id === movie.id);
        if(movieIndex !== -1){
          existingMovies.splice(movieIndex, 1);
          localStorage.setItem("movie", JSON.stringify([...(existingMovies)]))
        }
    }

    function update_local(e){
      let existingMovies = JSON.parse(localStorage.getItem("movie")) || [];
      e.target.classList.contains("text-yellow") ?  remove_from_local(existingMovies) : localStorage.setItem("movie", JSON.stringify([...(existingMovies), movie]))

      togglestars(e);

    }

     return (
    <div className="movie-card w-full  py-10 px-10 ">
      <Link href={`/carddetails/${movie.id}`}>
        <Img 
          width={300}
          height={300}
          src={image_url} 
          alt={movie.title || movie.name || 'Movie poster'} 
          className="w-full rounded-5"
        />
      </Link>
        {/* <img src={image_url} alt="" /> */}
      
      <div className="movie-card__content  mt-10">
        <h3 className="font-600 font-20 text-black">
          {movie.title || movie.name}
        </h3>
    
        <div className="mt-5 flex  justify-content-space-between">
          <span className="font-20 bg-lightblue px-5 py-5 rounded-5">{movie.media_type}</span>
          <div className=" flex items-center ">
            
          <div onClick={update_local} className="text-gray font-30 pointer">★</div>
            
          </div>
          
        </div>
      </div>

        <button  className="w-full  bg-blue font-600 text-white font-20  py-12 rounded-10 border-none pointer mt-10">Download</button>
      
    </div>
  );
}