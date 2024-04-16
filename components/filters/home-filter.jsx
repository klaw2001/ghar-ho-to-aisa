"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  bedroom,
  location,
  priceRange,
  propertyType,
} from "@/utils/homeProjects";
import SelectBox from "./select-box";

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const additionalPeople = [
  {
    id: 11,
    name: "Additional Person 1",
    avatar: "https://via.placeholder.com/256",
  },
  {
    id: 12,
    name: "Additional Person 2",
    avatar: "https://via.placeholder.com/256",
  },
  {
    id: 13,
    name: "Additional Person 3",
    avatar: "https://via.placeholder.com/256",
  },
  {
    id: 14,
    name: "Additional Person 4",
    avatar: "https://via.placeholder.com/256",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeFilters() {
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    propertyType[0]
  );
  const [selectedBedroom, setSelectedBedroom] = useState(bedroom[0]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRange[0]);
  const [selectedLocation, setSelectedLocation] = useState(location[0]);

  return (
    <div className="grid md:grid-cols-5 grid-cols-1 border border-2 p-4 gap-2 my-6">
      {/* Render Select Box for Property Type */}
      <SelectBox
        options={propertyType}
        selected={selectedPropertyType}
        setSelected={setSelectedPropertyType}
        classNames={classNames}
      />

      {/* Render Select Box for Bedroom */}
      <SelectBox
        options={bedroom}
        selected={selectedBedroom}
        setSelected={setSelectedBedroom}
        classNames={classNames}
      />

      {/* Render Select Box for Price Range */}
      <SelectBox
        options={priceRange}
        selected={selectedPriceRange}
        setSelected={setSelectedPriceRange}
        classNames={classNames}
      />

      {/* Render Select Box for Location */}
      <SelectBox
        options={location}
        selected={selectedLocation}
        setSelected={setSelectedLocation}
        classNames={classNames}
      />
      <button className="app-btn manrope">Search Properties</button>
    </div>
  );
}
