import React from "react";
import HeroGlobal from "../global/hero-global";
import BreadcrumbBox from "../global/breadcrumb-box";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  const contact = [
    {
      id: 1,
      name: "Email",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
      tag: "info@gharhotoaisa.com",
      icon: <MdEmail />,
      href:"mailto:info@gharhotoaisa.com"
    },
    {
      id: 2,
      name: "Phone",
      text: "Ms. Full Name /n Company Secretory/Investor",
      tag: "+91 22 42275700",
      icon: <IoCall />,
      href:"tel:+91 22 42275700"
    },
    {
      id: 3,
      name: "Office",
      text: "Registered & corporate office",
      tag: "6th Flr, Classic Pentagon, W.E. Highway, Next to Bisleri Factory, Andheri (East), Mumbai - 400 099.",
      icon: <FaLocationDot />,
      href:""
    },
  ];
  return (
    <>
      <section className="md:pt-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className={"text-left pt-32 pb-16 relative"}>
              <BreadcrumbBox page={"Contact"} alignment={"justify-start"} />
              <h1 className="text-[#3A0D32]">
                <span className="text-purple">{"Contact"}</span> {"us"}
              </h1>
              <p className="manrope">
                Our friendly team would love to hear from you.
              </p>
            </div>
            <div className="contact-form">
              <form action="">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-base manrope font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="block w-full manrope rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9f238b] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-base manrope font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="block w-full manrope rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9f238b] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="email"
                      class="block text-base manrope font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div class="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        class="block w-full manrope rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9f238b] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="email"
                      class="block text-base manrope font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div class="mt-2">
                      <input
                        id="number"
                        name="number"
                        type="number"
                        autocomplete="number"
                        class="block w-full manrope rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9f238b] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <label
                      for="country"
                      class="block text-base manrope font-medium leading-6 text-gray-900"
                    >
                      Project
                    </label>
                    <div class="mt-2">
                      <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        class="manrope block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#9f238b] sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option className="manrope">Project 1</option>
                        <option className="manrope">Project 2</option>
                        <option className="manrope">Project 3</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label
                      for="street-address"
                      class="block text-base manrope font-medium leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div class="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        class="block w-full manrope rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9f238b] sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="purple-btn manrope my-5 my-md-0"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32" data-aos='fade-up'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60260.36945658074!2d72.81733000856421!3d19.270486735260214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02a8f3173a5%3A0xca9be500cdc30093!2sGhar%20Ho%20To%20Aisa%20-%20Site%20Office!5e0!3m2!1sen!2sin!4v1719877434151!5m2!1sen!2sin"
          width="600"
          height="450"
          className="w-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="py-16 md:py-32">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {contact.map((elem , ind)=>(
              <div className="contact-inn-box md:mb-0 mb-8" key={elem.id} data-aos='fade-up'>
                <div className="text-3xl">{elem.icon}</div>
                <h4 className="mt-3 mb-3">{elem.name}</h4>
                <p className="manrope mb-6">{elem.text}</p>
                <a href={elem.href} className="text-black underline mt-6 text-base manrope">{elem.tag}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
