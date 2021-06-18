import calculate from '../logic/calculate';

describe('calculate', () => {
  describe('button case +/-', () => {
    it('return total as -1', () => {
      const result = calculate({
        total: '1',
        next: '',
        operation: null,
      }, '+/-');

      expect(result.total).toBe('-1');
    });

    it('return next as -2', () => {
      const result = calculate({
        total: '1',
        next: '2',
        operation: null,
      }, '+/-');

      expect(result.next).toBe('-2');
    });
  });

  describe('button case AC', () => {
    it('clears the calculate data', () => {
      const result = calculate({
        total: '1',
        next: '2',
        operation: '+',
      }, 'AC');

      expect(result.total).toBe('');
    });
  });

  describe('button case =', () => {
    it('return the total as 2 for +', () => {
      const result = calculate({
        total: '1',
        next: '1',
        operation: '+',
      }, '=');

      expect(result.total).toBe('2');
    });
  });

  it('return the total as same value without next', () => {
    const result = calculate({
      total: '1',
      next: '',
      operation: '+',
    }, '=');

    expect(result.total).toBe('1');
  });

  describe('button case .', () => {
    it('return the total as 1.', () => {
      const result = calculate({
        total: '1',
        next: '',
        operation: null,
      }, '.');

      expect(result.total).toBe('1.');
    });
  });

  it('return the next as 2.', () => {
    const result = calculate({
      total: '1',
      next: '2',
      operation: '+',
    }, '.');

    expect(result.next).toBe('2.');
  });

  describe('case 0 - 9 button', () => {
    it('return the total as button if operation is null', () => {
      const result = calculate({
        total: '',
        next: '',
        operation: null,
      }, '1');

      expect(result.total).toBe('1');
    });

    it('return the next as button if operation and total is present', () => {
      const result = calculate({
        total: '12',
        next: '',
        operation: '+',
      }, '1');

      expect(result.next).toBe('1');
    });
  });

  it('return the next as button if operation is present', () => {
    const result = calculate({
      total: '12',
      next: '',
      operation: '+',
    }, '1');

    expect(result.next).toBe('1');
  });

  describe('button case +, -, x, %, ÷', () => {
    it('return operation as button name when total is present', () => {
      const result = calculate({
        total: '12',
        next: '',
        operation: null,
      }, '+');

      expect(result.operation).toBe('+');
    });
  });
});
