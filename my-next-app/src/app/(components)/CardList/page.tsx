// import Card from "../Card/page"
// import { Movie } from '../../../Interfaces/movieInterface';

// export default function Home({ movies } : { movies: Movie[]}){
//     return (
//         <>
//         <section className="flex flex-wrap">
//             {movies.map((movie : Movie)=>{
//             return <Card key={movie.id} movie={movie}/>
//            })} 
//         </section>
           
//         </>
//     )
// }

import Card from "../Card/page";  // Assuming you rename the file from page.js to Card.tsx
import { Movie } from '../../../Interfaces/movieInterface';

interface Props {
  movies: Movie[];
}

export default function MovieList({ movies = []}: Props) {
    console.log(movies);
  if (!movies || movies.length === 0) {
    return <div className="text-center py-8">No movies found</div>;
  }

  return (
    <section className="flex flex-wrap gap-4 justify-center">
      {movies.map((movie) => (
         <Card key={movie.id} movie={movie} />
      ))}
    </section>
  );
}