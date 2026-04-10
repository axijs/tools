/**
 * Defines the public, read-only contract for an event emitter.
 * It allows subscribing to an event but not emitting it.
 * @template T A tuple representing the types of the event arguments.
 */
export type Subscribable<T extends any[]> = {
  readonly listenerCount: number;

  /**
   * Subscribes a listener to this event.
   * @returns A function to unsubscribe the listener.
   */
  subscribe(listener: (...args: T) => void): Unsubscribable;

  unsubscribe(listener: (...args: T) => void): boolean;

  clear(): void;
}

/**
 * Describes an object that can be unsubscribed from.
 */
export interface Unsubscribable {
  unsubscribe(): void;
}
