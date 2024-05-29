import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";

const SelectBox = ({ options, selected, setSelected, classNames }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative my-2">
          <Listbox.Button className="list-box-btn relative w-full cursor-default bg-white py-6 pl-3 pr-10 text-left text-gray-900   focus:outline-none focus:ring-2 focus:ring-black sm:text-sm sm:leading-6 md:border-r-2 md:border-b-0 border-b-2">
            <span className="flex items-center">
              <h5 className="ml-3 block truncate manrope">{selected.title}</h5>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) =>
                    classNames(
                      active ? "bg-[#D9D9D991] text-dark" : "text-gray-900",
                      "relative cursor-default select-none py-2 pl-3 pr-9 manrope"
                    )
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <div className="flex items-center">
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "ml-3 block truncate manrope"
                        )}
                      >
                        {item.title}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default SelectBox;
