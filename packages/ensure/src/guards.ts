/**
* Type guard that checks if a value is `null`.
* @param val The value to check.
* @returns {boolean} `true` if the value is `null`, otherwise `false`.
*/
export function isNull(val: unknown): val is null {
  return val === null;
}

/**
* Type guard that checks if a value is `undefined`.
* @param val The value to check.
* @returns {boolean} `true` if the value is `undefined`, otherwise `false`.
*/
export function isUndefined(val: unknown): val is undefined {
  return val === undefined;
}

/**
 * Type guard that checks if a value is either `null` or `undefined`.
 * @param val The value to check.
 * @returns {boolean} `true` if the value is `null` or `undefined`, otherwise `false`.
 */
export function isNullOrUndefined(val: unknown): val is null | undefined {
  return val === null || val === undefined;
}

/**
* Type guard that checks if a value is a `number`.
* @param val The value to check.
* @returns {boolean} `true` if the value is a `number`, otherwise `false`.
*/
export function isNumber(val: unknown): val is number {
  return typeof val === "number";
}

/**
 * Type guard that checks if a value is a `boolean`.
 * @param val The value to check.
 * @returns {boolean} `true` if the value is a `boolean`, otherwise `false`.
 */
export function isBoolean(val: unknown): val is boolean {
  return typeof val === "boolean";
}

/**
 * Type guard that checks if a value is a `string`.
 * @param val The value to check.
 * @returns {boolean} `true` if the value is a `string`, otherwise `false`.
 */
export function isString(val: unknown): val is string {
  return typeof val === "string";
}

/**
 * Check if a value is a plain object.
 * Correctly handles `null` and arrays, returning `false` for them.
 *
 * @param value The value to check.
 * @returns {boolean} `true` if the value is a non-null, non-array object.
 */
export function isObject(value: unknown): value is Record<PropertyKey, unknown> {
  return !isNullOrUndefined(value) && !Array.isArray(value) && typeof value === 'object';
}

/**
 * Type guard that checks if a value is a function.
 *
 * @param value The value to check.
 * @returns {boolean} `true` if the value is a function.
 */
export function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function';
}

/**
 * Type guard that checks if a value is a Promise-like object.
 *
 * @param value The value to check.
 * @returns {boolean} `true` if the value has a `then` function.
 */
export function isPromise(value: unknown): value is Promise<unknown> {
  return value != null && isFunction((value as any).then);
}

/**
 * Type guard that checks if a value is iterable (can be used in a for...of loop).
 *
 * @param value - The value to check.
 * @returns `true` if the value implements the Iterable protocol, otherwise `false`.
 */
export function isIterable(value: unknown): value is Iterable<unknown> {
  return !isNullOrUndefined(value) && isFunction((value as any)[Symbol.iterator]);
}

/**
 * Checks if a value is a Map.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Map, otherwise `false`.
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map;
}

/**
 * Checks if a value is a Set.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Set, otherwise `false`.
 */
export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set;
}

/**
 * Checks if a value is empty.
 * Returns `true` for `null`, `undefined`, empty strings, empty arrays, empty Maps / Sets,
 * and objects with no own enumerable properties.
 *
 * Complex objects like DOM elements or class instances are never considered empty.
 *
 * @param value - The value to check.
 * @returns `true` if the value is considered empty, otherwise `false`.
 */
export function isEmpty(value: unknown): boolean {
  if (isNullOrUndefined(value)) { return true; }
  if (isString(value) || Array.isArray(value)) { return !value.length; }
  if (isMap(value) || isSet(value)) { return !value.size; }

  if (isObject(value)) {
    const proto = Object.getPrototypeOf(value);
    /**
     * Object.prototype is equivalent to Object.getPrototypeOf({}).
     * If we get the prototype of an HTMLElement, it will be a different object, not equivalent to Object.prototype.
     * For plain objects like {a: 10}, the prototype is strictly Object.prototype.
     */
    const isPlainObject = proto === Object.prototype || proto === null;
    return isPlainObject && !Object.keys(value).length;
  }
  return false;
}
