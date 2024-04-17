import Image from "next/image";
import Link from "next/link";
import React from "react";

const Innovations = () => {
  const list = [
    {
      id: 1,
      title: "Ghar Ho Toh Aisa",
      para: "Revolutionizing flat interiors to maximize space utilization. With zero wastage design, every corner is purposefully crafted, ensuring that you get the most out of your living space.",
      url: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>`,
    },
    {
      id: 2,
      title: "Apne Dam Par",
      para: "Designed to revolutionize home financing. 'Apne Dam Par' is all about smart home loan planning, easing the financial burden on our customers.",
      url: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clip-rule="evenodd" />
    </svg>`,
    },
    {
      id: 3,
      title: "Growth Partner",
      para: "Tailored for investors seeking safe and assured returns. This unique plan offers a floor-to-floor partnership model, ensuring a secure and lucrative investment opportunity. Property Investment hi sahi Hai.",
      url: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clip-rule="evenodd" />
    </svg>`,
    },
  ];
  const createIcon = (icon) => {
    return { __html: icon };
  };
  return (
    <section className="py-16">
      <div className="container">
        <div className="innovations-wrapper grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="inn-image">
            <Image src="/images/innovations.png" width={711} height={800} />
          </div>
          <div className="inn-text md:p-8">
            <h2>Our Innovations</h2>
            <p className="my-6">
              We prioritize developing innovative solutions that directly
              address their needs. Our dedicated team is driven by a
              customer-centric approach, ensuring every product and service we
              create enhances customer experiences and delivers tangible
              results.
            </p>
            <div className="grid grid-cols-1 p-4 gap-7">
              {list.map((elem, ind) => (
                <div className="list-box flex items-start gap-3" key={ind}>
                  <div
                    className="icon-box mt-2 font-bold"
                    dangerouslySetInnerHTML={createIcon(elem.icon)}
                  />
                  <div className="list-text manrope">
                    <h4 className="manrope font-bold list-text-heading relative">
                      {elem.title}
                    </h4>
                    <p className="small-para manrope pt-6 pb-4">{elem.para}</p>
                    <Link href={elem.url} className="manrope text-sm">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
