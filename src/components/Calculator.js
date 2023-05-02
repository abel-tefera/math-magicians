import React, { useState } from 'react';
import CalculatorBtn from './CalculatorBtn';
import calculate from '../logic/calculate';
import calculatorItems from './data/calculatorItems';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="flex flex-row justify-between mx-16">
      <div>
        <h1 className="text-3xl">Let&apos;s do some Math!</h1>
      </div>
      <div className="overflow-hidden mb-2 border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div className="self-center">
          <div className="pt-8 px-5 pb-8 text-white bg-gray-500 text-right text-3xl">
            {calc.next === null
              ? calc.total === null
                ? 0
                : calc.total
              : calc.next}
          </div>

          {calculatorItems.map((row, i) => (
            <div className="flex items-stretch h-24 w-full" key={i}>
              {row.map(({
                bgColor, val, width, stayFocused,
              }, j) => (
                <CalculatorBtn
                  key={j}
                  bgColor={bgColor}
                  val={val}
                  width={width}
                  stayFocused={stayFocused}
                  onClickFun={() => {
                    const obj = calculate(calc, val);
                    setCalc(obj);
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
