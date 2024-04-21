import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      href: "/",
      text: "Home",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-white",
    },
    {
      href: "/about",
      text: "About Us",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-white",
    },
    {
      href: "/investors",
      text: "Investors",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-white",
    },
    {
      href: "/innovations",
      text: "Innovations",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-white",
    },
    {
      href: "/projects",
      text: "Projects",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-white",
    },
    {
      href: "/blogs",
      text: "Blogs",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-white",
    },
  ];

  return (
    <footer className="py-16 bg-purple">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-one flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="manrope text-white">Join Our Parivaar</h1>
              <p className="manrope text-white">
                By putting the customer at the heart of everything we do, we not
                only deliver exceptional results but also forge meaningful and
                lasting relationships. This customer-first approach is the
                cornerstone of our success and propels us forward on our journey
                towards excellence.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right my-4 md:my-0">
              <h1 className="manrope text-white">Subscribe</h1>
              <div className="newsletter-box flex gap-2 md:justify-end justify-center mb-3">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="p-3 manrope"
                />
                <button
                  type="submit"
                  className="app-btn bg-[#C69E58] manrope para-small"
                >
                  Submit
                </button>
              </div>
              <p className="small-para manrope text-white">
                By subscribing you agree to with our Privacy Policy
              </p>
            </div>
          </div>
          <div className="footer-two flex flex-col md:flex-row justify-between items-start md:py-8 md:px-12 p-8 my-8 border-2 border-inherit">
            <div>
              <Image
                src="/images/footer-logo.png"
                width={200}
                height={80}
                className="object-contain mix-blend-lighten"
              />
              <div className="content-box text-white manrope my-3">
                <p className="manrope font-bold">Address:</p>
                <span className="text-sm manrope">
                  6th Flr, Classic Pentagon, W.E. Highway, Next to Bisleri
                  Factory, Andheri (East), Mumbai - 400 099.
                </span>
              </div>
              <div className="content-box text-white manrope">
                <p className="manrope font-bold">Contact:</p>
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
              <div className="icons-box flex items-center gap-3 mt-3">
                <span>
                  <FaFacebook className="text-2xl text-white" />
                </span>
                <span>
                  <FaInstagram className="text-2xl text-white" />
                </span>
                <span>
                  <FaYoutube className="text-2xl text-white" />
                </span>
              </div>
            </div>
            <div className="mt-5 md:mt-0">
              <div className="flex gap-4 items-center justify-between md:justify-end">
                <ul>
                  {links.map((elem, ind) => (
                    <li key={ind}>
                      <Link href={elem.href} className={elem.className}>
                        {elem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {links.map((elem, ind) => (
                    <li key={ind}>
                      <Link href={elem.href} className={elem.className}>
                        {elem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="credits flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="para-small text-white">©Ghar Ho To Aisa 2024 All rights reserved.</p>
            </div>
            {/* <div className="flex gap-3">
              Something
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
