import operate from '../logic/operate';

describe('Tests operating ', () => {
  test('Test modulus 9 % 2 to get 4', () => {
    const product = operate(9, 2, '%');
    expect(product).toBe('4');
  });

  test('Test operate divid 15 / 3 to get 5', () => {
    const product = operate(15, 3, '/');
    expect(product).toBe('5');
  });

  test('Test multiplying 2 * 15 to get 30', () => {
    const product = operate(2, 15, 'x');
    expect(product).toBe('30');
  });

  test('Test adding 1 + 4 to get 5', () => {
    const product = operate(1, 4, '+');
    expect(product).toBe('5');
  });

  test('Test subtracting 8 - 4 to get 4', () => {
    const product = operate(8, 4, '-');
    expect(product).toBe('4');
  });
});
