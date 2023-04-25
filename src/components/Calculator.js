import React from 'react';
import CalculatorBtn from './CalculatorBtn';

const Calculator = () => {
  const calculatorItems = [
    [
      {
        bgColor: 'bg-gray-300',
        val: 'AC',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '+/-',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '%',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '÷',
        onClickFun: '',
        width: 1,
      },
    ],
    [
      {
        bgColor: 'bg-gray-300',
        val: '7',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '8',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '9',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '*',
        onClickFun: '',
        width: 1,
      },
    ],
    [
      {
        bgColor: 'bg-gray-300',
        val: '4',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '5',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '6',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '-',
        onClickFun: '',
        width: 1,
      },
    ],
    [
      {
        bgColor: 'bg-gray-300',
        val: '1',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '2',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-gray-300',
        val: '3',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '+',
        onClickFun: '',
        width: 1,
      },
    ],
    [
      {
        bgColor: 'bg-gray-300',
        val: '0',
        onClickFun: '',
        width: 2,
      },
      {
        bgColor: 'bg-gray-300',
        val: '.',
        onClickFun: '',
        width: 1,
      },
      {
        bgColor: 'bg-orange-500',
        val: '=',
        onClickFun: '',
        width: 1,
      },
    ],
  ];

  return (
    <div className="mx-auto overflow-hidden mt-10 mb-2 border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <div className="">
        <div className="pt-8 px-5 pb-8 text-white bg-gray-500 text-right text-3xl">
          0
        </div>

        {calculatorItems.map((row, i) => (
          <div className="flex items-stretch  h-24 w-full" key={i}>
            {row.map(({ bgColor, val, width }, j) => (
              <CalculatorBtn
                key={j}
                bgColor={bgColor}
                val={val}
                width={width}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
