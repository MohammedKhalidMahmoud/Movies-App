
// "use client";

import Link from "next/link";  //importing customized next link component  
// import { title } from "process";

export default function Navbar() {
  const navLinks=[
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Favorites",
      href: "/Favorite"
    },
    {
      title: "Search",
      href: "/search"
    }
  ]
  return (
    <nav className="bg-black  fixed w-full z-10 px-20 ">
      <h3 className="text-white mt-10">
        <Link href="/" className="font-30 bold  ">MovieDB</Link>
      </h3>
      <ul className=" list-dots-remove">
        {navLinks.map((link)=>{
          return(
            <li key={link.href} className=" mr-15 font-20 text-white bold text-center mt-5">
              <Link href={link.href}>{link.title}</Link>
            </li>
          )
        })}
      </ul>

      
    </nav>
  );
}

