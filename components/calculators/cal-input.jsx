// src/components/Input.jsx
import React from 'react';

const Input = ({ label, value, onChange, unit , small }) => {
  return (
    <div className="flex flex-col mb-4">
      <input
        type="number"
        value={value}
        onChange={onChange}
        className={`p-2 border rounded ${small && "w-[70px]"}`}
      />
      <span className="text-xs mt-2">{unit}</span>
    </div>
  );
};

export default Input;
