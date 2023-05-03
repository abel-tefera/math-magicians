import React from 'react';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';

import calculate from '../logic/calculate';
import Calculator from '../components/Calculator';

describe('calculator UI testing', () => {
  test('2 x 3', () => {
    render(<Calculator />);

    const answer = screen.getByTestId('in');

    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(answer.innerHTML).toBe('18');
  });

  test('clicking the button toggles the number', () => {
    render(<Calculator />);
    const button = screen.getByTestId('9');
    const answer = screen.getByTestId('in');
    fireEvent.click(button);
    expect(answer.innerHTML).toBe('9');
  });
});

afterEach(cleanup);

describe('testing calculations', () => {
  test('multiplying two numbers', () => {
    let obj = { total: null };
    obj = calculate(obj, '14');
    obj = calculate(obj, '*');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('28');
  });

  test('dividing two numbers', () => {
    let obj = { total: null };
    obj = calculate(obj, '14');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '7');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('2');
  });

  test('dividing by 0', () => {
    let obj = { total: null };
    obj = calculate(obj, '8');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '0');
    obj = calculate(obj, '=');
    expect(obj.total).toMatch("Can't divide by 0.");
  });
});
