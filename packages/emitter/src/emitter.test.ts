import {describe, expect, it, vi} from 'vitest';
import {Emitter} from './emitter';

describe('Emitter', () => {
  it('should add listeners and return listener count', () => {
    const emitter = new Emitter<[string]>();
    expect(emitter.listenerCount).toBe(0);

    const sub = emitter.subscribe(vi.fn());
    expect(emitter.listenerCount).toBe(1);

    sub.unsubscribe();
    expect(emitter.listenerCount).toBe(0);
  });

  it('should emit events to subscribed listeners', () => {
    const emitter = new Emitter<[string, number]>();
    const listener = vi.fn();

    emitter.subscribe(listener);
    emitter.emit('hello', 42);

    expect(listener).toHaveBeenCalledWith('hello', 42);
    expect(listener).toHaveBeenCalledOnce();
  });

  it('should allow manual unsubscribe', () => {
    const emitter = new Emitter<[string]>();
    const listener = vi.fn();

    emitter.subscribe(listener);
    const removed = emitter.unsubscribe(listener);

    emitter.emit('test');

    expect(removed).toBe(true);
    expect(emitter.listenerCount).toBe(0);
    expect(listener).not.toHaveBeenCalled();
  });

  it('should only fire once for .once() subscription', () => {
    const emitter = new Emitter<[number]>();
    const listener = vi.fn();

    emitter.once(listener);
    expect(emitter.listenerCount).toBe(1);

    emitter.emit(1);
    emitter.emit(2);

    expect(listener).toHaveBeenCalledOnce();
    expect(listener).toHaveBeenCalledWith(1);
    expect(emitter.listenerCount).toBe(0);
  });

  it('should clear all listeners', () => {
    const emitter = new Emitter<[]>();
    emitter.subscribe(vi.fn());
    emitter.subscribe(vi.fn());

    expect(emitter.listenerCount).toBe(2);

    emitter.clear();

    expect(emitter.listenerCount).toBe(0);
  });
});
