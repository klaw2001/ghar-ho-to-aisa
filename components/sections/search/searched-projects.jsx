"use client";
import { projectCategories, SearchedProjects } from "@/utils/projects";
import Image from "next/image";
import React, { useState } from "react";

const FilteredProjects = () => {
    const [activeTab, setActiveTab] = useState("Completed");
    const [location , setLocation] = useState(SearchedProjects[0].location)
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const iframeHandler = (map) =>{
        setLocation(map)
    }

    return (
        <section className="py-16 lg:h-screen">
            <section className="py-16 ">
                <div className="display-box grid lg:grid-cols-2 grid-cols-1 items-start gap-10 relative">
                    <div className="overflow-scroll order-1	lg:order-none md:h-[600px] no-scrollbar">

                        {SearchedProjects.map((elem, ind) => (
                                <div
                                    className="project-property-box grid grid-cols-1 mb-20"
                                    key={ind}
                                    // data-aos='fade-up'
                                    onClick={()=>iframeHandler(elem.location)}
                                >
                                    <div className={`image-box `}>
                                        <Image
                                            src={elem.image}
                                            width={620}
                                            height={450}
                                            className="object-contain w-full"
                                        />
                                    </div>
                                    <div className={`p-text p-5 h-full content-center `}

                                    >

                                        <h3 className={`manrope mb-8 relative w-max pr-10 before:content-[''] before:absolute before:-bottom-2 before:w-full before:border-2 before:border-black `}>
                                            {elem.name}
                                        </h3>
                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-6" >
                                            {elem?.features?.map((project, ind) => (
                                                <div className="flex gap-2 manrope" key={ind}>
                                                    <p className="manrope" dangerouslySetInnerHTML={{ __html: project.icon }}></p>
                                                    <h6 className="manrope">{project.text}</h6>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-4 flex-wrap md:flex-nowrap">
                                            <a href="" className="manrope flex gap-2 border-2 items-center border-black py-2 px-4 text-lg"> <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>

                                                Enquire</a>
                                            <a className="manrope flex gap-2 border-2 border-black py-2 px-4 text-lg items-center bg-purple text-white">
                                                Book A Visit
                                            </a>
                                            <a className="manrope flex gap-2 border-2 border-black py-2 px-4 text-lg items-center">
                                                <svg fill="#000000" width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"></path> </g></svg>
                                                Book A Visit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                    <div className="">
                        <div dangerouslySetInnerHTML={{ __html: location }} className=" my-iframe"></div>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default FilteredProjects;
