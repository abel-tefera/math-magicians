import React from 'react';

const CalculatorBtn = ({ bgColor, val, width }) => (
  <div
    className={`${
      width === 1 ? 'w-1/4' : 'w-1/2'
    } justify-center flex items-center text-black text-2xl font-semibold border border-solid`}
  >
    <button
      type="button"
      className={`h-full w-full flex items-center ${bgColor} justify-center focus:outline-none`}
      name={`${val}`}
    >
      {val}
    </button>
  </div>
);

export default CalculatorBtn;
