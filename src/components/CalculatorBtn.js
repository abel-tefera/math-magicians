import React from 'react';

const CalculatorBtn = ({
  bgColor, val, width, onClickFun, stayFocused,
}) => (
  <div
    className={`${
      width === 1 ? 'w-1/4' : 'w-1/2'
    } justify-center flex items-center text-black text-2xl font-semibold border border-solid`}
  >
    <button
      type="button"
      className={`h-full w-full flex items-center ${bgColor} justify-center transition-all ease-in hover:opacity-80 ${
        stayFocused ? 'focus:bg-gray-100 focus:text-black' : 'active:bg-gray-500'
      } `}
      name={`${val}`}
      onClick={onClickFun}
      data-testid={val}
    >
      {val}
    </button>
  </div>
);

export default CalculatorBtn;
