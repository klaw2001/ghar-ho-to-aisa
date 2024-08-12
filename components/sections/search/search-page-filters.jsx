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

export default function SearchPageFilters() {
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
    <div>

    <div
      className="grid md:grid-cols-2 grid-cols-1 gap-8 px-4 justify-center hidden md:grid relative gap-2 bg-white items-center"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
      // data-aos='fade-up'
    >
      {/* Render Select Box for Property Type */}
      <SelectBox
        label={"Project Type"}
        options={propertyType}
        selected={selectedPropertyType}
        setSelected={setSelectedPropertyType}
        classNames={classNames}
        searchPage={true}
      />

      {/* Render Select Box for Bedroom */}
      <SelectBox
        label={"Configuration"}
        options={bedroom}
        selected={selectedBedroom}
        setSelected={setSelectedBedroom}
        classNames={classNames}
        searchPage={true}
      />

      {/* Render Select Box for Price Range */}
      <SelectBox
        label={"Price Range"}
        options={priceRange}
        selected={selectedPriceRange}
        setSelected={setSelectedPriceRange}
        classNames={classNames}
        searchPage={true}
      />

      {/* Render Select Box for Location */}
      <SelectBox
        label={"Location"}
        options={location}
        selected={selectedLocation}
        setSelected={setSelectedLocation}
        classNames={classNames}
        searchPage={true}
      />
      <Link href='/search' className="border-2 border-black py-2 manrope text-center ">
        Search Properties
      </Link>
    </div>
    </div>
  );
}
