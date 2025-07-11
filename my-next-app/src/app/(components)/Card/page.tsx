"use client";

import { useState, useEffect } from "react";
import Img from "next/image";
import Link from "next/link";
// import {Roboto} from "next/font/google";
import { Movie } from "@/Interfaces/movieInterface";
import { IMAGE_BASE_URl } from "@/Constants.";

// const roboto = Roboto({ weight: '400', subsets: ['latin'] });
export default function Home({ movie }: { movie: Movie }) {
  //state
  const [isFavorite, setIsFavorite] = useState(false);
  const image_url = `${IMAGE_BASE_URl}/${movie.poster_path}`;

    useEffect(() => {
    // Check if movie is in favorites when component mounts
    const existingMovies = JSON.parse(localStorage.getItem("movie") || "[]");
    setIsFavorite(existingMovies.some((m: Movie) => m.id === movie.id));
    // console.log(isFavorite);
  }, []);

  //functions
  function togglestars(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement; // type assertion to HTMLElement
    target.classList.toggle("text-yellow");
    target.classList.toggle("text-gray");
    // setIsFavorite(!isFavorite);
  }

  function removeFromLocal(existingMovies: Movie[]) {
    const movieIndex = existingMovies.findIndex(
      (m: Movie) => m.id === movie.id
    );
    if (movieIndex !== -1) {
      existingMovies.splice(movieIndex, 1);
      localStorage.setItem("movie", JSON.stringify([...existingMovies]));
    }
    window.dispatchEvent(new Event("storage"));
  }

  function updateLocal(e: React.MouseEvent<HTMLElement>) {
    let existingMovies = JSON.parse(localStorage.getItem("movie") || "[]");
    const target = e.target as HTMLElement; // type assertion to HTMLElement
    target.classList.contains("text-yellow")
      ? removeFromLocal(existingMovies)
      : localStorage.setItem(
          "movie",
          JSON.stringify([...existingMovies, movie])
        );

    togglestars(e);
  }

  return (
    <section className="movie-card w-full  py-10 px-10 ">
      <Link href={`/carddetails/${movie.id}`}>
        <Img
          width={300} // Required
          height={300} // Required
          src={image_url}
          alt={movie.name || "Movie poster"}
          className="w-full rounded-5"
          priority // Optional: Preload above-the-fold images
        />
      </Link>

      <section className="movie-card__content  mt-10">
        <h3 className="font-600 font-20 text-black">{movie.name}</h3>

        <div className="mt-5 flex  justify-content-space-between">
          {movie.media_type && (
            <span className="font-20 bg-lightblue px-5 py-5 rounded-5">
              {movie.media_type}
            </span>
          )}
          {!movie.media_type && (
            <span className="font-20 bg-lightblue px-5 py-5 rounded-5">
              {movie.vote_average.toFixed(1)}
            </span>
          )}

          <div className=" flex items-center ">
            {
          isFavorite ? (<div onClick={updateLocal} className="text-yellow font-30 pointer">★</div>) :
                       (<div onClick={updateLocal} className="text-gray font-30 pointer">★</div>)
          }
          </div>
        </div>
      </section>

      <button className="w-full  bg-blue font-600 text-white font-20  py-12 rounded-10 border-none pointer mt-10">
        Download
      </button>
    </section>
  );
}
