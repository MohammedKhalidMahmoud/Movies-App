import CardList from "../../(components)/CardList/page";
// export default function Home({params}){
//     const {id} =params;
//     return (
//         <>
//             {id}
//             <p>card details</p>
//         </>
//     )
// }


import axios from "axios";
import { Movie } from '@/interfaces/movieInterface';

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
     <div className="movie-card w-full  py-10 b-2 b-solid ">
      
        {/* <Img 
          width={200}
          height={300}
          src={image_url} 
          alt={movie.title || movie.name || 'Movie poster'} 
          className="movie-card__image w-200"
        /> */}
      <img src={image_url} alt="" />
      
      <div className="movie-card__content mx-10 mt-10">
        <h3 className="font-600 font-20 text-black">
          {movie.name}
        </h3>
        <div className="movie-card__rating mt-5">
          <span className="text-yellow font-20">★</span>
          {/* <span>{movie.vote_average.toFixed(1)}</span> */}
        </div>
      </div>
      
      {/* <button onClick={push_to_local} className="bg-blue font-600 text-white font-20 w-full py-12 rounded-10 border-none pointer mt-10">Add to Favorite</button> */}
    </div>
  );
}
