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
import SelectBox from "./select-box";
import Link from "next/link";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeFilters() {
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
      className="grid md:grid-cols-5 grid-cols-1 border-2 border-gray px-4 gap-2 mt-14 mb-14 items-center"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
      data-aos='fade-up'
    >
      {/* Render Select Box for Property Type */}
      <SelectBox
        label={"Project Type"}
        options={propertyType}
        selected={selectedPropertyType}
        setSelected={setSelectedPropertyType}
        classNames={classNames}
      />

      {/* Render Select Box for Bedroom */}
      <SelectBox
        label={"Configuration"}
        options={bedroom}
        selected={selectedBedroom}
        setSelected={setSelectedBedroom}
        classNames={classNames}
      />

      {/* Render Select Box for Price Range */}
      <SelectBox
        label={"Price Range"}
        options={priceRange}
        selected={selectedPriceRange}
        setSelected={setSelectedPriceRange}
        classNames={classNames}
      />

      {/* Render Select Box for Location */}
      <SelectBox
        label={"Location"}
        options={location}
        selected={selectedLocation}
        setSelected={setSelectedLocation}
        classNames={classNames}
      />
      <Link href='/search' className="purple-btn manrope my-5 my-md-0">
        Search Properties
      </Link>
    </div>
  );
}
