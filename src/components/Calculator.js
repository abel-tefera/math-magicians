import React, { useState } from 'react';
import CalculatorBtn from './CalculatorBtn';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculatorItems = [
    [
      {
        bgColor: 'bg-gray-300',
        val: 'AC',
        stayFocused: false,
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '+/-',
        stayFocused: false,
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '%',
        stayFocused: true,

        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '÷',
        stayFocused: true,

        width: 1,
      },
    ],
    [
      {
        bgColor: 'bg-gray-300',
        val: '7',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '8',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '9',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '*',
        stayFocused: true,

        width: 1,
      },
    ],
    [
      {
        bgColor: 'bg-gray-300',
        val: '4',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '5',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '6',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '-',
        stayFocused: true,

        width: 1,
      },
    ],
    [
      {
        bgColor: 'bg-gray-300',
        val: '1',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '2',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '3',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '+',
        stayFocused: true,

        width: 1,
      },
    ],
    [
      {
        bgColor: 'bg-gray-300',
        val: '0',
        stayFocused: false,

        width: 2,
      },
      {
        bgColor: 'bg-gray-300',
        val: '.',
        stayFocused: false,

        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '=',
        stayFocused: false,

        width: 1,
      },
    ],
  ];

  return (
    <div className="mx-auto overflow-hidden mt-10 mb-2 border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <div className="">
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
  );
};

export default Calculator;
