"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import logo from "@/public/images/logo-new.png";
import logo2 from "@/assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSectionHeight = 0; 
      if (scrollPosition > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    className={`fixed z-50 top-0 left-0 right-0 ${isScrolled ? 'bg-white' : ''}`}
    >
      <div className="container mx-auto flex justify-between items-center py-5 ">
        <div className="logo">
          <Link href="/">
            {isScrolled ? (
              <Image
                src={logo2}
                alt="Logo"
                width={200}
                height={80}
                className="max-w-max md:w-1/2"
              />
            ) : (
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={80}
                className="max-w-max md:w-3/5"
              />
            )}
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="redirection hidden md:block mr-4">
            <Link href="/contact" className={`white-btn  manrope ${isScrolled ? 'text-black border-black' : 'text-white border-white'}`}>
              Contact Us
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className={`text-gray-700 hover:text-black focus:text-black focus:outline-none ${
              isOpen && "relative"
            }`}
            style={{ zIndex: 999988 }}
          >
            {isOpen ? <AiOutlineClose size={30} /> : <RiMenu2Line color={isScrolled ? '#000' : "#fff"} size={30} />}
          </button>
        </div>
      </div>
      <div
        className={`nav-links fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{zIndex:9999}}
      >
        <Link
          href="/"
          className="manrope font-semibold text-lg px-4 py-5 block"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="manrope font-semibold text-lg px-4 py-5 block"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          href="/investors"
          className="manrope font-semibold text-lg px-4 py-5 block"
          onClick={toggleMenu}
        >
          Investors
        </Link>
        <Link
          href="/innovations"
          className="manrope font-semibold text-lg px-4 py-5 block"
          onClick={toggleMenu}
        >
          Innovations
        </Link>
        <Link
          href="/projects"
          className="manrope font-semibold text-lg px-4 py-5 block"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className="manrope font-semibold text-lg px-4 py-5 block"
          onClick={toggleMenu}
        >
          Blogs
        </Link>
      </div>
    </header>
  );
};

export default Header;
