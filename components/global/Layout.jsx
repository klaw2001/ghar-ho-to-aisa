import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SearchBox from "./search-box";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <SearchBox/> */}
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
