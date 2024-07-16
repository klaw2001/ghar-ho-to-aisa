"use client";
import React, { useState } from "react";
import Slider from "./cal-slider";
import Input from "./cal-input";
import PieChartComponent from "./pie-chart";
const formatNumber = (num) => {
  if (num < 100) {
    return num;
  }
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(num);
};
const EmiCalculator = () => {
  const [flatCost, setFlatCost] = useState(10000000);
  const [downPayment, setDownPayment] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.75);
  const [tenure, setTenure] = useState(12);

  const loanAmount = flatCost - downPayment;
  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfMonths = tenure * 12;
  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
  const totalPayment = emi * numberOfMonths;
  const totalInterest = totalPayment - loanAmount;

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="grid grid-cols-1 gap-5 w-full items-center">
          <div className="slider-wrapper w-full flex">
            <Slider
              label="Flat Cost"
              min={100000}
              max={100000000}
              step={100000}
              value={flatCost}
              onChange={(e) => setFlatCost(Number(e.target.value))}
              unit="₹"
            />
          </div>
          <div className="slider-wrapper w-full flex">
            <Slider
              label="Down Payment"
              min={100000}
              max={50000000}
              step={100000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              unit="₹"
            />
          </div>

          <div className="slider-wrapper w-full flex gap-4">
            <div className="mb-4 flex w-full">
              <Slider
                label="Interest Rate (% P.A.)"
                min={0.5}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                unit="%"
                small={true}
              />
            </div>
            <div className="mb-4 flex w-full">
              <Slider
                small={true}
                label="Tenure (Years)"
                min={1}
                max={30}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                unit="Years"
              />
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div className="amount-wrap md:w-2/5 mx-auto flex md:flex-col items-center justify-center text-center">
              <div className="amount-box">
                <p className="text-gray small-para font-regular manrope">
                  Loan EMI
                </p>
                <h4 className="manrope">₹{formatNumber(emi.toFixed(2))}</h4>
              </div>
              <div className="amount-box my-8">
                <p className="text-gray small-para font-regular manrope">
                  {" "}
                  Total Payment (Principal + Interest)
                </p>
                <h4 className="manrope">
                  {" "}
                  ₹{formatNumber(totalPayment.toFixed(2))}
                </h4>
              </div>
              <div className="amount-box">
                <p className="text-gray small-para font-regular manrope">
                  Interest Given to bank (A)
                </p>
                <h4 className="manrope">
                  ₹{formatNumber(totalInterest.toFixed(2))}
                </h4>
              </div>
            </div>
            <div className="pie-chart-wrap md:w-3/5 mx-auto">
              <PieChartComponent
                principal={loanAmount}
                interest={totalInterest}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmiCalculator;
