import Image from "next/image";
import Link from "next/link";
import React from "react";

const CurrentProjects = () => {
  return (
    <>
    
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 items-center gap-4">
          <div className="col-span-5 mb-5 md:mb-0">
            <h2>Current Projects</h2>
            <p className="my-6 manrope">
              We prioritize developing innovative solutions that directly
              address their needs. Our dedicated team is driven by a
              customer-centric approach, ensuring every product and service we
              create enhances customer experiences and delivers tangible
              results.
            </p>
            <div className="redirection mr-4 border-black w-max overflow-hidden py-[0.8em] ">
            <Link href="/projects" className={`white-btn  manrope text-black border-black hover:text-white`}>
              Contact Us
            </Link>
          </div>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image src="/images/project1.png" width={390} height={460} className="mb-4"/>
                <Image src="/images/project2.png" width={390} height={460} className="object-cover h-[146px] md:h-[290px]" />
              </div>
              <div>
                <Image src="/images/project3.png" width={390} height={460} className="mb-4"/>
                <Image src="/images/project4.png" width={390} height={460} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="my-16 md:my-32 py-16 bg-[#FEE9FE]">
      <div className="container">
        <div className="exp-projects-wrapper text-center">
          <h2 className="relative font-bold mb-5">
            Our Vision
          </h2>
          <span className="manrope mt-5 text-2xl font-medium">
          Empowered by a land bank exceeding 1 crore SqFt of constructible area, our development pace of 1 home per day reflects our commitment to your dreams. With dynamic leadership, a passionate team, and innovative products, we're poised for further growth, ready to give wings to your dream home aspirations.
          </span>
        </div>
      </div>
    </section>
    </>
  );
};

export default CurrentProjects;
