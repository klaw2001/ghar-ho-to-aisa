import React from "react";

const formatNumber = (num) => {
  if (num < 100) {
    return num;
  }
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(num);
};

const Slider = ({ label, min, max, step, value, onChange, unit, small }) => {
  const handleInputChange = (e) => {
    const num = e.target.value.replace(/,/g, ""); // Remove commas
    const parsedValue = parseFloat(num);
    if (!isNaN(parsedValue) && parsedValue >= min && parsedValue <= max) {
      onChange({ target: { value: parsedValue } });
    } else if (parsedValue < min) {
      onChange({ target: { value: min } });
    } else if (parsedValue > max) {
      onChange({ target: { value: max } });
    }
  };

  return (
    <div className="flex flex-col mb-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <label className="mb-2 text-lg manrope font-semibold">{label}</label>
        <input
          type="text"
          value={formatNumber(value)}
          onChange={handleInputChange}
          className={`amt-input p-2 border rounded border-black manrope font-semibold ${
            small && "w-[70px]"
          }`}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full accent-[#9F238B]"
      />
      <div className="flex justify-between text-xs mt-2">
        <span>
          {formatNumber(min)}
          {unit}
        </span>
        <span>
          {formatNumber(value)}
          {unit}
        </span>
        <span>
          {formatNumber(max)}
          {unit}
        </span>
      </div>
    </div>
  );
};

export default Slider;
