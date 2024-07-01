import React from "react";
import Footer from "../footer/Footer";
import HeaderForOthers from "../header/HeaderForOthers";

const NewLayout = ({ children }) => {
  return (
    <>
      <HeaderForOthers />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default NewLayout;
