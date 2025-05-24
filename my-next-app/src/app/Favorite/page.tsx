"use client";

import { Movie } from '@/interfaces/movieInterface';
const CardList = (await import("../(components)/CardList/page")).default; // CardList is imported dynamically (when needed)
// const CardList = (await import("../(components)/CardList/page")).default;
import { useState , useEffect} from "react";

export default  function Home() {
  const [loading , setLoading]= useState(true);
   const [favoritemovies, setFavoritemovies]= useState([]);
  function handleStorageChange(){
    console.log("hello");
    console.log("hello");
    setFavoritemovies(JSON.parse(localStorage.getItem("movie")) || []);
  }
  useEffect(() => {
    
    setLoading(false);
    setFavoritemovies(JSON.parse(localStorage.getItem("movie")) || []);
    window.addEventListener('storage', handleStorageChange);
    console.log("Event listener added");
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      console.log("Event listener removed");
    };
  }, []);

  

  if(! loading && favoritemovies.length===0){
    return <div className="text-center font-xxl bold text-blue absolute top-50-p left-50-p translate-middle">No Favorite Movies</div>
  }
  return (
    <main className='mt-30-p favorites-div'>
      <CardList movies={favoritemovies} />
    </main>
  );
}