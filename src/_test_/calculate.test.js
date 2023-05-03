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
});

afterEach(cleanup);

describe('testing calculations', () => {

});
