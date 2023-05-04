import operate from '../logic/operate';

describe('Tests operating ', () => {
  test('Test moduluses 7 % 3 to get 1', () => {
    const product = operate(7, 2, '%');
    expect(product).toBe('1');
  });

  test('Test divided by 15 / 3 to get 5', () => {
    const product = operate(15, 3, '÷');
    expect(product).toBe('5');
  });

  test('Test multiply by 5 * 5 to get 25', () => {
    const product = operate(5, 5, '*');
    expect(product).toBe('25');
  });

  test('Test addition 1 + 12 to get 13', () => {
    const product = operate(1, 12, '+');
    expect(product).toBe('13');
  });

  test('Test subtraction 9 - 4 to get 5', () => {
    const product = operate(9, 4, '-');
    expect(product).toBe('5');
  });
});
