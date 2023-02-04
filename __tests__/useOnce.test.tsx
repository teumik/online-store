import { act, renderHook } from '@testing-library/react';
import useOnce from '../src/hooks/useOnce';

describe('Correct implementation of useOnce hook', () => {
  it('Callback must be called once', () => {
    const counter = { count: 0 };
    const callback = () => {
      counter.count += 1;
    };
    const { result } = renderHook(() => useOnce(callback));
    Array(4).fill(0).map(() => act(() => result.current()));
    expect(counter.count).toEqual(1);
  });
});
