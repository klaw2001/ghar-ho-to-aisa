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
            <Link href="/projects" className="app-btn manrope">
              View All Projects
            </Link>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image src="/images/project1.png" width={390} height={460} className="mb-4"/>
                <Image src="/images/project2.png" width={390} height={460} />
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

    <section className="py-16 bg-[#FEE9FE]">
      <div className="container">
        <div className="exp-projects-wrapper text-center">
          <h1 className="relative ">
            Our Vision
          </h1>
          <h4 className="manrope mt-5">
          Empowered by a land bank exceeding 1 crore SqFt of constructible area, our development pace of 1 home per day reflects our commitment to your dreams. With dynamic leadership, a passionate team, and innovative products, we're poised for further growth, ready to give wings to your dream home aspirations.
          </h4>
        </div>
      </div>
    </section>
    </>
  );
};

export default CurrentProjects;
