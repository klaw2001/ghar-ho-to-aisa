import Link from "next/link";
import React from "react";

const SearchBox = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 block md:hidden" style={{ zIndex: 99 }}>
      <div className="bg-white py-4 flex justify-center items-center gap-8 w-100">
        <Link href="/search" className="border-2 border-black p-2 manrope uppercase w-100 text-base font-bold px-8">Search</Link>
        <Link href="/contact" className="border-2 bg-purple text-white border-black p-2 manrope uppercase w-100 text-base font-bold px-8">Get in Touch</Link>
      </div>
    </div>
  );
};

export default SearchBox;
