import {describe, it, expect} from 'vitest';
import {throwError, throwIf, throwIfEmpty} from './assertion';

describe('Error Throwing', () => {
  it('throwIf', () => {
    expect(() => throwIf(true, 'Error message')).toThrow('Error message');
    expect(() => throwIf(false, 'Error message')).not.toThrow();
  });

  it('throwIfEmpty', () => {
    expect(() => throwIfEmpty(null, 'Empty value')).toThrow('Empty value');
    expect(() => throwIfEmpty([], 'Empty array')).toThrow('Empty array');
    expect(() => throwIfEmpty('', 'Empty string')).toThrow('Empty string');

    expect(() => throwIfEmpty('Hello', 'Empty')).not.toThrow();
    expect(() => throwIfEmpty([1], 'Empty')).not.toThrow();
    expect(() => throwIfEmpty({a: 1}, 'Empty')).not.toThrow();
    expect(() => throwIfEmpty(0, 'Empty')).not.toThrow(); // 0 is not empty
  });

  it('throwError', () => {
    expect(() => throwError('Fatal')).toThrow('Fatal');
  });
});
