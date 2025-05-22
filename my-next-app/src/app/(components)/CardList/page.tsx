import Card from "../Card/page"
import { Movie } from '../../../interfaces/movieInterface';

export default function Home({movies} : Movie[]){
    return (
        <>
        {/* Hello World */}
        <div className="flex flex-wrap">
            {movies.map((movie :Movie)=>{
            return <Card key={movie.id} movie={movie}/>
           })} 
        </div>
           
        </>
    )
}