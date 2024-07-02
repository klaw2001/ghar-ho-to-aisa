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
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-black",
    },
    {
      href: "/about",
      text: "About Us",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-black",
    },
    {
      href: "/investors",
      text: "Investors",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-black",
    },
    {
      href: "/innovations",
      text: "Innovations",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-black",
    },
    {
      href: "/projects",
      text: "Projects",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-black",
    },
    {
      href: "/blogs",
      text: "Blogs",
      className:
        "manrope font-semibold text-lg px-4 py-2 block lg:inline-block text-black",
    },
  ];

  return (
    <footer className="bg-purple mt-32">
      <div className="footer-wrap">
        <div className="py-16 bg-[url('/images/footer-bg.png')] bg-center	 bg-cover	">
          <div className="container mx-auto footer-one flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h1 className="manrope text-white"  data-aos="fade-up">Join Our Parivaar</h1>
              <p className="manrope text-white md:mr-40" data-aos="fade-up">
                By putting the customer at the heart of everything we do, we not
                only deliver exceptional results but also forge meaningful and
                lasting relationships. This customer-first approach is the
                cornerstone of our success and propels us forward on our journey
                towards excellence.
              </p>
            </div>
            <div className="w-full md:w-2/5 text-center md:text-right my-4 md:my-0">
              <div className="md:w-max md:text-left md:ml-auto">
                <h1 className="manrope text-white" data-aos="fade-up">Subscribe</h1>
                 
                <div className="newsletter-box flex gap-2 md:justify-start justify-center mb-3" data-aos="fade-up" >
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="p-3 manrope md:w-[353px]"
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
          </div>
        </div>
        <div  data-aos="fade-up" className="footer-two bg-white flex flex-col md:flex-row justify-between items-start md:py-14 md:px-12 p-8  rounded-ss-[3rem]	rounded-se-[3rem]	">
          <div>
            <Image
              src="/images/footer-logo.png"
              width={200}
              height={80}
              className="object-contain mb-8 mx-auto md:mr-auto md:ml-0"
            />
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
        <div className="credits flex flex-col md:flex-row justify-between items-center bg-white ">
          <div className="border-t-2 border-black	w-full mx-6 flex py-4">
            <p className="para-small text-center w-full text-black">
              ©Ghar Ho To Aisa 2024 All rights reserved.
            </p>
           
          </div>
          {/* <div className="flex gap-3">
              Something
            </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
