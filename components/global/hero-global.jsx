import React from "react";
import BreadcrumbBox from "./breadcrumb-box";
import Image from "next/image";
import CircularTextNew from "./circular-text-2";

const HeroGlobal = ({
  myclass,
  title,
  para,
  spanText,
  alignBreadcrumb,
  image,
  page,
  circleAlign
}) => {
  return (
    <>
      <section className="relative">
        <div className="container">
          <div className={myclass}>
            <BreadcrumbBox page={page} alignment={alignBreadcrumb} />
            <h1 className="text-[#3A0D32]">
              {title} <span className="text-purple">{spanText}</span>
            </h1>
            <p className="manrope">{para}</p>
          </div>
          <div className="relative">
            {image && (
              <>
              
              <Image
                src={image}
                width={1200}
                height={600}
                className="mx-auto w-full my-16 object-contain"
              />
            <CircularTextNew alignment={circleAlign} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroGlobal;
