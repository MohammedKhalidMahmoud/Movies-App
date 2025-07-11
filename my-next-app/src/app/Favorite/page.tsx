"use client";

// import { Movie } from "@/Interfaces/movieInterface";
const CardList = (await import("../(components)/CardList/page")).default; // CardList is imported dynamically (when needed)
// const CardList = (await import("../(components)/CardList/page")).default;
import { useState, useEffect } from "react";

export default function Home() {
  //state
  const [loading, setLoading] = useState(false);
  const [favoritemovies, setFavoritemovies] = useState([]);

  //functions
  function handleStorageChange() {
    setFavoritemovies(JSON.parse(localStorage.getItem("movie") || "[]"));
  }

  // side effects
  useEffect(() => {
    setLoading(true);
    setFavoritemovies(JSON.parse(localStorage.getItem("movie") || "[]"));
    window.addEventListener("storage", handleStorageChange);
    setLoading(false);
    //cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!loading && favoritemovies.length === 0) {
    return (
      <div className="text-center font-xxl bold text-blue absolute top-50-p left-50-p translate-middle">
        No Favorite Movies
      </div>
    );
  }
  return (
    <main className="mt-30-p favorites-div">
      <CardList movies={favoritemovies} />
    </main>
  );
}
