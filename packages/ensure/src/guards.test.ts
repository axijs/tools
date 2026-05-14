import {describe, it, expect} from 'vitest';
import {
  isBoolean, isEmpty,
  isFunction, isIterable,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isMap,
  isSet,
  isPromise,
  isString,
  isUndefined
} from './guards';

describe('Type Guards & Utilities', () => {
  it('isNull', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
  });

  it('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
  });

  it('isNullOrUndefined', () => {
    expect(isNullOrUndefined(null)).toBe(true);
    expect(isNullOrUndefined(undefined)).toBe(true);
    expect(isNullOrUndefined(false)).toBe(false);
    expect(isNullOrUndefined(0)).toBe(false);
    expect(isNullOrUndefined('')).toBe(false);
  });

  it('isNumber', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(NaN)).toBe(true); // typeof NaN === 'number'
    expect(isNumber('0')).toBe(false);
    expect(isNumber(null)).toBe(false);
  });

  it('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(null)).toBe(false);
  });

  it('isString', () => {
    expect(isString('')).toBe(true);
    expect(isString('hello')).toBe(true);
    expect(isString(123)).toBe(false);
    expect(isString(null)).toBe(false);
  });

  it('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({a: 1})).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(() => {
    })).toBe(false);
  });

  it('isFunction', () => {
    expect(isFunction(() => {
    })).toBe(true);
    expect(isFunction(function () {
    })).toBe(true);
    expect(isFunction(class {
    })).toBe(true);
    expect(isFunction({})).toBe(false);
    expect(isFunction(null)).toBe(false);
  });

  it('isPromise', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
    expect(isPromise({
      then: () => {
      }
    })).toBe(true); // duck typing (thenable)
    expect(isPromise({})).toBe(false);
    expect(isPromise(null)).toBe(false);
  });

  it('isIterable', () => {
    expect(isIterable([])).toBe(true);
    expect(isIterable('')).toBe(true);
    expect(isIterable(new Map())).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable({})).toBe(false);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(123)).toBe(false);
  });

  it('isMap', () => {
    expect(isMap('')).toBe(false);
    expect(isMap(115)).toBe(false);
    expect(isMap([])).toBe(false);
    expect(isMap({})).toBe(false);
    expect(isMap({size: 10})).toBe(false);
    expect(isMap(new Set)).toBe(false);

    expect(isMap(new Map())).toBe(true);
  });

  it('isSet', () => {
    expect(isSet('')).toBe(false);
    expect(isSet(115)).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet({})).toBe(false);
    expect(isSet({size: 10})).toBe(false);
    expect(isSet(new Map)).toBe(false);

    expect(isSet(new Set())).toBe(true);
  });

  it('isEmpty', () => {
    // Empty cases
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);

    // Non-empty cases
    expect(isEmpty('text')).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty({a: 1})).toBe(false);

    // Primitives that are not "empty" by length/keys
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);

    // Map and set
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
    expect(isEmpty(new Set(['value']))).toBe(false);

    // Case for class
    class EmptyClass {}
    const instance = new EmptyClass();
    expect(isEmpty(instance)).toBe(false);

    // Case for object with prototype
    const objWithProto = Object.create({ someMethod: () => {} });
    expect(isEmpty(objWithProto)).toBe(false);
  });
});
