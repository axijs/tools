import {describe, expect, it, vi} from 'vitest';
import {StateEmitter} from './state-emitter';

describe('State Emitter', () => {
  it('should initialize with undefined value if no initial value provided', () => {
    const emitter = new StateEmitter<[number]>();
    expect(emitter.value).toBeUndefined();
  });

  it('should initialize with provided initial value', () => {
    const emitter = new StateEmitter<[number, string]>([42, 'test']);
    expect(emitter.value).toEqual([42, 'test']);
  });

  it('should update value on emit', () => {
    const emitter = new StateEmitter<[number]>();
    emitter.emit(100);
    expect(emitter.value).toEqual([100]);
  });

  it('should trigger listener immediately upon subscription if value exists', () => {
    const emitter = new StateEmitter<[string]>(['initial']);
    const listener = vi.fn();

    emitter.subscribe(listener);

    expect(listener).toHaveBeenCalledOnce();
    expect(listener).toHaveBeenCalledWith('initial');
  });

  it('should not trigger listener immediately if value is undefined', () => {
    const emitter = new StateEmitter<[string]>();
    const listener = vi.fn();

    emitter.subscribe(listener);

    expect(listener).not.toHaveBeenCalled();
  });

  it('should reset value and listeners on clear', () => {
    const emitter = new StateEmitter<[number]>([1]);
    emitter.subscribe(vi.fn());

    emitter.clear();

    expect(emitter.value).toBeUndefined();
    expect(emitter.listenerCount).toBe(0);
  });
});
