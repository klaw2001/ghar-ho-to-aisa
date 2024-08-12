"use client";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  bedroom,
  location,
  priceRange,
  propertyType,
} from "@/utils/homeProjects";
import Link from "next/link";
import SelectBox from "@/components/filters/select-box";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileFilters({display , handleClick}) {
  const [selectedPropertyType, setSelectedPropertyType] = useState(propertyType[0]);
  const [selectedBedroom, setSelectedBedroom] = useState(bedroom[0]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRange[0]);
  const [selectedLocation, setSelectedLocation] = useState(location[0]);

  useEffect(() => {
    const filters = {
      selectedPropertyType,
      selectedBedroom,
      selectedPriceRange,
      selectedLocation,
    };
    localStorage.setItem('homeFilters', JSON.stringify(filters));
  }, [selectedPropertyType, selectedBedroom, selectedPriceRange, selectedLocation]);
  return (
    <div
      className={`grid md:grid-cols-5 grid-cols-1 border-2 border-gray ${display ? 'block absolute overflow-hidden top-0 right-0 bottom-0 left-0 px-10 py-20 z-[100000000]' : 'hidden'} relative bg-white items-center`}
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" , marginTop:'-95px'}}
      // data-aos='fade-up'
    >
      {/* Render Select Box for Property Type */}
      <SelectBox
        label={"Project Type"}
        options={propertyType}
        selected={selectedPropertyType}
        setSelected={setSelectedPropertyType}
        classNames={classNames}
        display={display}
      />

      {/* Render Select Box for Bedroom */}
      <SelectBox
        label={"Configuration"}
        options={bedroom}
        selected={selectedBedroom}
        setSelected={setSelectedBedroom}
        classNames={classNames}
        display={display}
      />

      {/* Render Select Box for Price Range */}
      <SelectBox
        label={"Price Range"}
        options={priceRange}
        selected={selectedPriceRange}
        setSelected={setSelectedPriceRange}
        classNames={classNames}
        display={display}
      />

      {/* Render Select Box for Location */}
      <SelectBox
        label={"Location"}
        options={location}
        selected={selectedLocation}
        setSelected={setSelectedLocation}
        classNames={classNames}
        display={display}
      />
      <Link href='/search' className="mt-10 border-2 border-black py-4 manrope text-center">
        Search Properties
      </Link>

      <button onClick={handleClick} className="absolute top-4 right-4 z-[100000000]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
    </div>
  );
}
