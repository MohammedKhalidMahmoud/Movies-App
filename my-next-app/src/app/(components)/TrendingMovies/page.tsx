import axios from 'axios';
import CardList from '../CardList/page'
export default async function Home() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=439a143cbf0a0e823ff8a1afbf446819'
    );
    // toast.success("Trending movies loaded successfully!");
    return response.data.results;
    
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}