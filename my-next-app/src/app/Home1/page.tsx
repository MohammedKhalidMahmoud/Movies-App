import axios from "axios";
import CardList from "../(components)/CardList/page";
import Card from "../(components)/Card/page";

interface Product {
  id: string;
  title: string;
  price: number;
  // other product fields
}

interface HomeProps {
  products: Product[];
}


export async function getServerSideProps() {
  try {
    const res = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
    return { 
      props: { 
        products: res.data.data || [] // Fallback to empty array if data is undefined
      } 
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { 
      props: { 
        products: [] // Return empty array if there's an error
      } 
    };
  }
}

export default function Home({ products } : HomeProps) {
  return (
    <>
    <Card/>
    {products.map(()=>{
        return <Card/>
    })}
      {/* Pass products to CardList component */}
      <CardList />
    </>
  );
}