

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
     <section className=" w-80-p m-auto  py-10 px-10  mt-80 details_div">
      
        <Img 
          width={300}
          height={300}
          src={image_url} 
          alt={ 'Movie poster'} 
          className="w-full rounded-5  h-30-p image"
        />
      
      <section className="  mt-10  ml-10 summary">
        <h2 className="font-600 font-20 text-black mb-10">
          Summary:<br/>
          { movie.name}
        </h2>
        <h3>{movie.overview}</h3>

        <section className="mt-5 ">
          {/* <span className="font-24 bg-lightblue px-5 py-5 rounded-5">{movie.media_type}</span> */}
          <div className=" flex items-center mt-10">
           <h3>Reviews:</h3><br /> 
            
          {/* <div onClick={update_local} className="text-gray font-30 pointer">★</div> */}
            <h4 className="bg-lightblue px-5 py-5 rounded-5 ml-5">{movie.vote_average.toFixed(1)}</h4>
            <h4>({movie.vote_count})</h4>
          </div>
          
        </section>
        <button  className="w-full  bg-blue font-600 text-white font-20  py-12 rounded-10 border-none pointer mt-10">Download</button>
      </section>

      
      
    </section>
  );
}
