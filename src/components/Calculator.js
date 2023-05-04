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
    <div className="md:px-16 px-2">
      <div className="mx-auto overflow-hidden mb-2 border rounded-lg w-full md:w-1/2">
        <div className="">
          <div className="pt-8 px-5 pb-8 text-white bg-gray-500 text-right text-3xl" data-testid="in">
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
