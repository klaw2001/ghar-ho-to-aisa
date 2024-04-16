import React from "react";

const ExpertiseSection = () => {
  return (
    <section className="py-16 bg-lavendar">
      <div className="container">
        <div className="expertise-wrap grid grid-cols-1 md:grid-cols-2 items-center pb-14">
          <h2 className="mb-4 md:mb-0">Expertise</h2>
          <p className="link">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <video src="/videos/expertise.mp4" autoPlay muted loop className="m-auto w-full"></video>
      </div>
    </section>
  );
};

export default ExpertiseSection;
