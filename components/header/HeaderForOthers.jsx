"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import logo from "@/public/images/logo-new.png";
import logo2 from "@/assets/images/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const HeaderForOthers = () => {
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
    <>
   
    <header
    className={`fixed z-50 top-0 left-0 right-0 bg-white`}
    >
      <div className="container mx-auto flex justify-between items-center py-5 ">
        <div className="logo">
          <Link href="/">
              <Image
                src={logo2}
                alt="Logo"
                width={200}
                height={80}
                className="max-w-max md:w-1/2"
              />
            
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="redirection hidden md:block mr-4 border-white overflow-hidden py-[0.8em] ">
            <Link href="/contact" className={`white-btn  manrope text-black border-black hover:text-white`}>
              Contact Us
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className={`text-gray-700 hover:text-black focus:text-black focus:outline-none ${
              isOpen && "relative"
            }`}
            style={{ zIndex: 999 }}
          >
            <RiMenu2Line color={'#000'} size={30} />
          </button>
        </div>
      </div>
      <div
       className={`nav-links fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col items-center justify-start transition-transform duration-300 ${
        isOpen ? "md:-translate-x-2/4 translate-x-0" : "-translate-x-full"
      }`}
        style={{zIndex:9999}}
      >
        <div className="all-links md:w-1/2 text-left h-full ml-auto mt-20 grid grid-cols-1 justify-between relative h-full">
          <div className="nav-all-links">
            <button
              onClick={toggleMenu}
              className={`text-gray-700 hover:text-black focus:text-black focus:outline-none absolute top-0 right-[15px] 
            }`}
              style={{ zIndex: 999988 }}
            >
              <AiOutlineClose size={30} />
            </button>
            <Link
              href="/"
              className=" nav-linkk manrope font-semibold text-xl md:text-3xl px-4 py-4 block bg-white z-50 relative h-[50px]"
              onClick={toggleMenu}
            >
              <div className="menu-text">
                <span className="mb-4 main-text">Home</span>
                <div className="menu-text-hover text-4xl manrope">
                  HOME
                </div>
              </div>
            </Link>
            <Link
              href="/about"
              className="nav-linkk manrope font-semibold text-xl md:text-3xl px-4 py-4 block content-center h-[50px] bg-white relative z-50"
              onClick={toggleMenu}
            >
              
              <div className="menu-text">
                <span className="mb-4 main-text">About Us</span>
                <div className="menu-text-hover text-4xl manrope pb-1">
                  ABOUT US
                </div>
              </div>
            </Link>
            <Link
              href="/investors"
              className="nav-linkk manrope font-semibold text-xl md:text-3xl px-4 py-4 block h-[50px] bg-white relative z-50"
              onClick={toggleMenu}
            >
              <div className="menu-text">
                <span className="mb-4 main-text">Investors</span>
                <div className="menu-text-hover text-4xl manrope pb-1 uppercase">
                Investors
                </div>
              </div>
              
            </Link>
            <Link
              href="/innovations"
              className="nav-linkk manrope font-semibold text-xl md:text-3xl px-4 py-4 block h-[50px] bg-white relative z-50"
              onClick={toggleMenu}
            >
              <div className="menu-text">
                <span className="mb-4 main-text">Innovations</span>
                <div className="menu-text-hover text-4xl manrope pb-1 uppercase">
                Innovations
                </div>
              </div>
            </Link>
            <Link
              href="/projects"
              className="nav-linkk manrope font-semibold text-xl md:text-3xl px-4 py-4 block h-[50px] bg-white relative z-50"
              onClick={toggleMenu}
            >
              <div className="menu-text">
                <span className="mb-4 main-text">Projects</span>
                <div className="menu-text-hover text-4xl manrope pb-1 uppercase">
                Projects
                </div>
              </div>
              
            </Link>
            <Link
              href="/blogs"
              className="nav-linkk manrope font-semibold text-xl md:text-3xl px-4 py-4 block h-[50px] bg-white relative z-50"
              onClick={toggleMenu}
            >
               <div className="menu-text">
                <span className="mb-4 main-text">Blogs</span>
                <div className="menu-text-hover text-4xl manrope pb-1 uppercase blog-text-hover">
                Blogs
                </div>
              </div>
              
            </Link>
          </div>
          <div className="content-inheader content-end pl-5 pb-10">
            <div className="content-box manrope my-6">
              <p className="manrope font-bold text-purple">Address:</p>
              <span className="text-sm manrope">
                6th Flr, Classic Pentagon, W.E. Highway, Next to Bisleri
                Factory, Andheri (East), Mumbai - 400 099.
              </span>
            </div>
            <div className="content-box manrope">
              <p className="manrope font-bold text-purple">Contact:</p>
              <a className="text-sm manrope" href="tel:+91 22 42275700">
                +91 22 42275700
              </a>{" "}
              <br />
              <a
                className="text-sm manrope"
                href="mailto:info@gharhotoaisa.com"
              >
                info@gharhotoaisa.com
              </a>
            </div>
            <div className="icons-box flex items-center gap-3 mt-8">
              <span>
                <FaFacebook className="text-2xl text-dark" />
              </span>
              <span>
                <FaInstagram className="text-2xl text-dark" />
              </span>
              <span>
                <FaYoutube className="text-2xl text-dark" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default HeaderForOthers;
