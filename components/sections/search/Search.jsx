'use client'
import React, { useEffect, useState } from 'react'
import ImageView from '../projects/image-view'
import FilteredProjects from './searched-projects'

const Search = () => {
    const [filters, setFilters] = useState([])
  
    useEffect(() => {
        const savedFilters = JSON.parse(localStorage.getItem('homeFilters'));
        if (savedFilters) {
          const { selectedPropertyType, selectedBedroom, selectedPriceRange, selectedLocation } = savedFilters;
          setFilters([
            { item: selectedPropertyType.title },
            { item: selectedBedroom.title },
            { item: selectedPriceRange.title },
            { item: selectedLocation.title },
          ]);
        }
      }, []);

      const removeItem = (item) => {
        setFilters(filters.filter(filter => filter.item !== item));
      };
    return (
        <section className="py-16">
            <div className="container">
                <div className="search-wrapper">
                    <div className="search-box position-relative">
                        <div className="pt-2 relative mx-auto text-gray-600">
                            <input
                                className="border-2 border-black w-full bg-white h-10 pl-6 pr-16 rounded-lg manrope text-sm placeholder:text-black focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search"
                                style={{ height: '50px' }}
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 bottom-0 mt-2 mr-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-search"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="filters-box grid md:grid-cols-2 grid-cols-1 mt-6 items-center">
                        <div className="filters flex gap-8 flex-wrap md:flex-nowrap justify-center md:justify-start">
                            {filters && filters.length > 1 && (
                                filters.map((elem, ind) => (
                                    <div key={ind} className='text-base bg-gray-200 p-2 manrope flex gap-4 rounded'>{elem.item} <span className='cursor-pointer' onClick={() => removeItem(elem.item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    </span>
                                    
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="hide-btn flex justify-center mt-6 mt-md-0 md:justify-end gap-4">

                            <button className='cursor-pointer  flex gap-4 text-black py-2 px-4 manrope border-2 border-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                            </svg>
                                Filters</button>
                            <button className='cursor-pointer flex gap-4  text-black py-2 px-4 manrope border-2 border-black'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                </svg>
                                Hide Map</button>
                        </div>
                    </div>
                            <div>
                                <FilteredProjects/>
                            </div>
                </div>

            </div></section>
    )
}

export default Search