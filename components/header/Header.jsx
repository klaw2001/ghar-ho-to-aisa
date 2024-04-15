import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
const Header = () => {
  return (
    <header>
      <div className="navbar-wrapper py-5">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center container">
            <div className="logo">
              <Link href="/">
                <Image src={logo} />
              </Link>
            </div>
            <div className="nav-links manrope">
              <Link href="" className="manrope font-semibold text-lg px-4">
                About us
              </Link>
              <Link href="" className="manrope font-semibold text-lg px-4">
                Investors
              </Link>
              <Link href="" className="manrope font-semibold text-lg px-4">
                Innovations
              </Link>
              <Link href="" className="manrope font-semibold text-lg px-4">
                Projects
              </Link>
              <Link href="" className="manrope font-semibold text-lg px-4">
                Blogs
              </Link>
            </div>
            <div className="redirection">
              <Link href="" className="manrope app-btn">
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
