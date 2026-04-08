import {isEmpty} from './guards';

/**
 * Throws an error if the condition is true.
 * @param condition  - If true, an error will be thrown.
 * @param message - The message for the error.
 * @throws {Error} if the value is true
 *
 */
export function throwIf(condition: boolean, message: string): asserts condition is false {
  if (condition) {
    throw new Error(message);
  }
}

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
export function throwIfEmpty<T>(value: T, message: string): asserts value is NonNullable<T> {
  throwIf(isEmpty(value), message);
}

/**
 * Throws an error unconditionally.
 *
 * @param message The message for the error.
 * @throws {Error} Always throws an error with the provided message.
 */
export function throwError(message: string): never {
  throw new Error(message);
}
