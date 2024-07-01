import React from "react";

const CircularText = ({text}) => {
  const svgStyles = {
    fill: "currentColor",
    height: "auto",
    maxWidth: "23vmin",
    transformOrigin: "center",
    width: "100%",
    position: "relative",
  };
  //   flex w-[220px] justify-center items-center
  return (
    <>
      <div className="absolute w-full left-50 flex justify-end right-0 -bottom-[117px] md:-bottom-[83px] z-10">
        <div className="circular-text flex w-[133px] relative">
          <svg
            viewBox="0 0 100 100"
            width="100"
            height="100"
            style={svgStyles}
            className="spin-animation"
          >
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0
      "
              />
            </defs>
            <text fontSize="17">
              <textPath
                xlinkHref="#circle"
                className="text-[0.85rem] font-bold"
              >
                WELCOME TO . GHAR HO TO AISA .
              </textPath>
            </text>
          </svg>

          <div className="home rounded-full bg-[#9F238B] text-white w-12 h-12 md:w-16 md:h-16 font-bold flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircularText;
