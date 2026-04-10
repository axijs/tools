import {describe, expect, it, vi} from 'vitest';
import {Subscription} from './subscription';

describe('Subscription', () => {
  it('should initialize with closed = false', () => {
    const sub = new Subscription();
    expect(sub.closed).toBe(false);
  });

  it('should execute constructor teardown on unsubscribe', () => {
    const teardown = vi.fn();
    const sub = new Subscription(teardown);

    sub.unsubscribe();

    expect(sub.closed).toBe(true);
    expect(teardown).toHaveBeenCalledOnce();
  });

  it('should execute added function teardowns on unsubscribe', () => {
    const sub = new Subscription();
    const teardown1 = vi.fn();
    const teardown2 = vi.fn();

    sub.add(teardown1);
    sub.add(teardown2);
    sub.unsubscribe();

    expect(teardown1).toHaveBeenCalledOnce();
    expect(teardown2).toHaveBeenCalledOnce();
  });

  it('should execute added Unsubscribable objects on unsubscribe', () => {
    const sub = new Subscription();
    const mockUnsubscribable = { unsubscribe: vi.fn() };

    sub.add(mockUnsubscribable);
    sub.unsubscribe();

    expect(mockUnsubscribable.unsubscribe).toHaveBeenCalledOnce();
  });

  it('should execute teardown immediately if added after unsubscribe', () => {
    const sub = new Subscription();
    sub.unsubscribe();

    const teardownFn = vi.fn();
    const teardownObj = { unsubscribe: vi.fn() };

    sub.add(teardownFn);
    sub.add(teardownObj);

    expect(teardownFn).toHaveBeenCalledOnce();
    expect(teardownObj.unsubscribe).toHaveBeenCalledOnce();
  });

  it('should safely ignore multiple unsubscribe calls', () => {
    const teardown = vi.fn();
    const sub = new Subscription(teardown);

    sub.unsubscribe();
    sub.unsubscribe();
    sub.unsubscribe();

    expect(teardown).toHaveBeenCalledOnce();
  });
});
