import Image from "next/image";
import React from "react";

const InnovationBox = () => {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="inn-wrapper grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="inn-text p-5 order-1 md:order-none">
              <h6 className="manrope text-[#C69E58] font-semibold">
                1st Innovation
              </h6>
              <h2>Ghar Ho Toh Aisa</h2>
              <p className="manrope mt-3">
                Introducing 'Ghar Ho To Aisa' - where your home truly feels like
                a dream. Our first innovation approach to flat interiors that
                maximizes space usability. Our zero wastage design ensures every
                inch serves a purpose, reducing unnecessary costs for our
                customers. Say goodbye to paying for unused areas and hello to a
                cost-effective yet luxurious living experience. Explore 'Ghar Ho
                To Aisa' and transform your home into a space of efficiency and
                comfort.
              </p>
              <ul className="pl-6 mt-5">
                <li className="manrope text-lg list-disc">
                  Zero Wastage Design
                </li>
                <li className="manrope text-lg list-disc">
                  Top Notch Interior Design
                </li>
                <li className="manrope text-lg list-disc">
                  Pocket Centric Approach
                </li>
              </ul>
            </div>
            <div className="inn-img mx-auto md:ml-auto md:mr-0">
              <Image
                src="/images/innovation-1.png"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="inn-wrapper grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="inn-img mx-auto md:mr-auto md:ml-0 ">
              <Image
                src="/images/innovation-1.png"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="inn-text p-5">
              <h6 className="manrope text-[#C69E58] font-semibold">
                2nd Innovation
              </h6>
              <h2>Apne Dam Par</h2>
              <p className="manrope mt-3">
                A solution to streamline home financing. With traditional home
                loans burdening customers with hefty interest payments over 15
                years, our plan divides the flat cost into three parts:
                30-40-30. You pay 30% as a down payment, 40% in interest-free
                monthly installments until possession, and the remaining 30%
                upon possession. This strategic approach reduces the loan amount
                from 80% to 30% at the end, significantly cutting interest and
                shortening the repayment period.
              </p>
              <ul className="pl-6 mt-5">
                <li className="manrope text-lg list-disc">
                  0% interest Free EMI
                </li>
                <li className="manrope text-lg list-disc">
                  Loan Tenure Reduces To 5 years
                </li>
                <li className="manrope text-lg list-disc">
                  Save Mini 20 Lacs on Home Loan{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnovationBox;
