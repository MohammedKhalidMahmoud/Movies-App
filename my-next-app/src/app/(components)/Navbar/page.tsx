
"use client";

import Link from "next/link";  //importing customized next link component  

export default function Navbar() {
  return (
    <nav className="bg-black  fixed w-full z-10 px-20 ">
      <h3 className="text-white mt-10">
        <Link href="/" className="font-30 bold  ">MovieDB</Link>
      </h3>
      <ul className=" list-dots-remove">
        <li className=" mr-15 font-20 text-white bold text-center mt-5"><Link href="/">Home</Link></li>
        <li className=" mr-15 font-20 text-white bold text-center mt-5"><Link href="/Favorite">Favorites</Link></li>
        <li className=" mr-15 font-20 text-white bold text-center mt-5 mb-10"><Link href="/search">Search</Link></li>
      </ul>

      
    </nav>
  );
}

