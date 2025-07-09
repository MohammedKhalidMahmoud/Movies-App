import Card from "../Card/page"
import { Movie } from '../../../Interfaces/movieInterface';

export default function Home({ movies } : { movies: Movie[]}){
    return (
        <>
        <section className="flex flex-wrap">
            {movies.map((movie : Movie)=>{
            return <Card key={movie.id} movie={movie}/>
           })} 
        </section>
           
        </>
    )
}