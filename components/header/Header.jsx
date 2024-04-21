"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-50 top-0 left-0 right-0 ">
      <div className="navbar-wrapper py-5">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center relative z-50">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="Logo" className="max-w-max md:w-3/5" />
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-black focus:text-black focus:outline-none"
              >
                <CiMenuBurger isOpen={isOpen} size={30} />
              </button>
            </div>
            <div
              className={`nav-links md:static absolute top-0 text-center md:pt-0 pt-16 ease-in-out duration-300 -z-50 ${
                isOpen ? "right-0 left-0" : "left-[auto] right-[-300px]"
              }`}
            >
              <Link
                href="/"
                className="manrope font-semibold text-lg px-4 py-2 block lg:inline-block"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="manrope font-semibold text-lg px-4 py-2 block lg:inline-block"
              >
                About Us
              </Link>
              <Link
                href="/investors"
                className="manrope font-semibold text-lg px-4 py-2 block lg:inline-block"
              >
                Investors
              </Link>
              <Link
                href="/innovations"
                className="manrope font-semibold text-lg px-4 py-2 block lg:inline-block"
              >
                Innovations
              </Link>
              <Link
                href="/projects"
                className="manrope font-semibold text-lg px-4 py-2 block lg:inline-block"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="manrope font-semibold text-lg px-4 py-2 block lg:inline-block"
              >
                Blogs
              </Link>
            </div>
            <div className="redirection hidden md:block">

              <Link
                href="/contact"
                className="app-btn manrope"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
