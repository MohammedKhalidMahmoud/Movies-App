

import axios from "axios";
import { Movie } from '@/interfaces/movieInterface';
import Link  from 'next/link';
import Img from "next/image";

async function getmoviedeatils(id: string): Promise<Movie> {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=439a143cbf0a0e823ff8a1afbf446819`
      
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export default async function Home({params} : {params:{cardId: string}}) {
  const {cardId:id} =params;
  console.log(id);
  const movie = await getmoviedeatils(id);
  const image_url=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  // {console.log(movies);}
  return (
     <div className=" w-80-p m-auto  py-10 px-10 flex bg-">
      {/* <Link href={`/carddetails/${movie.id}`}> */}
        <Img 
          width={300}
          height={300}
          src={image_url} 
          // alt={ 'Movie poster'} 
          className="w-full rounded-5 w-30-p h-30-p"
        />
      {/* </Link> */}
        {/* <img src={image_url} alt="" /> */}
      
      <div className="  mt-10 w-60-p ml-10 ">
        <h2 className="font-600 font-20 text-black mb-10">
          {movie.title || movie.name}
          {/* Hello */}
        </h2>
        <h4>{movie.overview}</h4>

        <div className="mt-5 flex  justify-content-space-between">
          <span className="font-24 bg-lightblue px-5 py-5 rounded-5">{movie.media_type}</span>
          <div className=" flex items-center ">
            
          {/* <div onClick={update_local} className="text-gray font-30 pointer">★</div> */}
            
          </div>
          
        </div>
        <button  className="w-full  bg-blue font-600 text-white font-20  py-12 rounded-10 border-none pointer mt-10">Download</button>
      </div>

      
      
    </div>
  );
}
