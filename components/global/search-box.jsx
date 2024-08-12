'use client'
import Link from "next/link";
import React, { useState } from "react";
import MobileFilters from "../sections/home/mobile-filters";

const SearchBox = () => {
  const [display , setDisplay] = useState(false)
    const handleClick = () =>{
      setDisplay(!display)
    }
  return (
    <>
    
    <div className="fixed bottom-0 left-0 right-0 block md:hidden" style={{ zIndex: 99 }}>
      <div className="bg-white py-4 flex justify-center items-center gap-8 w-100">
        <button onClick={handleClick} className="border-2 border-black p-2 manrope uppercase w-100 text-base font-bold px-8">Search</button>
        <Link href="/contact" className="border-2 bg-purple text-white border-black p-2 manrope uppercase w-100 text-base font-bold px-8">Get in Touch</Link>
      </div>
    </div>

    <MobileFilters display={display} handleClick={handleClick}/>
    </>
  );
};

export default SearchBox;
