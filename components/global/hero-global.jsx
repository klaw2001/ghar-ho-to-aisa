import React from "react";
import BreadcrumbBox from "./breadcrumb-box";
import Image from "next/image";
import CircularText from "./circular-text";

const HeroGlobal = ({
  myclass,
  title,
  para,
  spanText,
  alignBreadcrumb,
  image,
}) => {
  return (
    <>
      <section className="relative">
        <div className="container">
          <div className={myclass}>
            <BreadcrumbBox page={"About"} alignment={alignBreadcrumb} />
            <h1 className="text-[#3A0D32]">
              {title} <span className="text-purple">{spanText}</span>
            </h1>
            <p className="manrope">{para}</p>
          </div>
          {image && (
            <Image
              src={image}
              width={1200}
              height={600}
              className="mx-auto my-16 object-contain"
            />
          )}
        </div>
        <CircularText />
      </section>
    </>
  );
};

export default HeroGlobal;
