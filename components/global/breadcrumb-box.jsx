import Link from "next/link";
import React from "react";

const BreadcrumbBox = ({page , alignment}) => {
  return (
    <div className="breadcrumb">
      <nav class={`flex px-5 py-3 text-black rounded-lg ${alignment}`} aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <Link
              href="#"
              class="inline-flex items-center text-lg font-medium text-black manrope   "
            >
              Home
            </Link>
          </li>

          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180  w-3 h-3 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ms-1 text-lg font-medium text-black md:ms-2 manrope">
                {page}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbBox;
