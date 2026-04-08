/**
* Type guard that checks if a value is `null`.
* @param val The value to check.
* @returns {boolean} `true` if the value is `null`, otherwise `false`.
*/
declare function isNull(val: unknown): val is null;
/**
* Type guard that checks if a value is `undefined`.
* @param val The value to check.
* @returns {boolean} `true` if the value is `undefined`, otherwise `false`.
*/
declare function isUndefined(val: unknown): val is undefined;
/**
 * Type guard that checks if a value is either `null` or `undefined`.
 * @param val The value to check.
 * @returns {boolean} `true` if the value is `null` or `undefined`, otherwise `false`.
 */
declare function isNullOrUndefined(val: unknown): val is null | undefined;
/**
* Type guard that checks if a value is a `number`.
* @param val The value to check.
* @returns {boolean} `true` if the value is a `number`, otherwise `false`.
*/
declare function isNumber(val: unknown): val is number;
/**
 * Type guard that checks if a value is a `boolean`.
 * @param val The value to check.
 * @returns {boolean} `true` if the value is a `boolean`, otherwise `false`.
 */
declare function isBoolean(val: unknown): val is boolean;
/**
 * Type guard that checks if a value is a `string`.
 * @param val The value to check.
 * @returns {boolean} `true` if the value is a `string`, otherwise `false`.
 */
declare function isString(val: unknown): val is string;
/**
 * Check if a value is a plain object.
 * Correctly handles `null` and arrays, returning `false` for them.
 *
 * @param value The value to check.
 * @returns {boolean} `true` if the value is a non-null, non-array object.
 */
declare function isObject(value: unknown): value is Record<PropertyKey, unknown>;
/**
 * Type guard that checks if a value is a function.
 *
 * @param value The value to check.
 * @returns {boolean} `true` if the value is a function.
 */
declare function isFunction(value: unknown): value is (...args: any[]) => any;
/**
 * Type guard that checks if a value is a Promise-like object.
 *
 * @param value The value to check.
 * @returns {boolean} `true` if the value has a `then` function.
 */
declare function isPromise(value: unknown): value is Promise<unknown>;
/**
 * Type guard that checks if a value is iterable (can be used in a for...of loop).
 *
 * @param value - The value to check.
 * @returns `true` if the value implements the Iterable protocol, otherwise `false`.
 */
declare function isIterable(value: unknown): value is Iterable<unknown>;
/**
 * Checks if a value is empty.
 * Returns `true` for `null`, `undefined`, empty strings, empty arrays, and objects with no own enumerable properties.
 *
 * @param value - The value to check.
 * @returns `true` if the value is considered empty, otherwise `false`.
 */
declare function isEmpty(value: unknown): boolean;

/**
 * Throws an error if the condition is true.
 * @param condition  - If true, an error will be thrown.
 * @param message - The message for the error.
 * @throws {Error} if the value is true
 *
 */
declare function throwIf(condition: boolean, message: string): asserts condition is false;
/**
 * Throws an error if the value is null, undefined, or an empty array / object / string.
 *
 * @template T The type of the value being checked.
 * @param value The value to check.
 * @param message The message for the error.
 * @throws {Error} if the value is null, undefined, or an empty array.
 *
 * @example
 * // Example with a potentially undefined variable
 * const user: { name: string } | undefined = findUser();
 * throwIfEmpty(user, 'User not found');
 * // From here, TypeScript knows `user` is not undefined.
 * console.log(user.name);
 *
 * @example
 * // Example with an array
 * const items: string[] = getItems();
 * throwIfEmpty(items, 'Items array cannot be empty');
 * // From here, you can safely access items[0] without checking for an empty array again.
 * console.log('First item:', items[0]);
 */
declare function throwIfEmpty<T>(value: T, message: string): asserts value is NonNullable<T>;
/**
 * Throws an error unconditionally.
 *
 * @param message The message for the error.
 * @throws {Error} Always throws an error with the provided message.
 */
declare function throwError(message: string): never;

export { isBoolean, isEmpty, isFunction, isIterable, isNull, isNullOrUndefined, isNumber, isObject, isPromise, isString, isUndefined, throwError, throwIf, throwIfEmpty };
