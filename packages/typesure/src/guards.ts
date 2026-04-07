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
  return value !== null && !Array.isArray(value) && typeof value === 'object';
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
  return value != null && typeof (value as any).then === 'function';
}


// todo: logic
export function isIterable(): boolean {
  return false;
}

// todo: correct logic: true if the value is null, undefined, or array / object / string are empty.
export function isEmpty(value: unknown): boolean {
  return false;
}
