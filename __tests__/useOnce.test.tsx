import { act, renderHook } from '@testing-library/react';
import useOnce from '../src/hooks/useOnce';

describe('Correct implementation of useOnce hook', () => {
  it('returns first character in upper case', () => {
    const counter = {
      count: 0,
    };
    const callback = () => {
      counter.count += 1;
    };
    const { result } = renderHook(() => useOnce(callback));

    Array(2).fill(0).map(() => console.log('asddasdasd'));

    act(() => {
      result.current();
    });

    console.log(counter.count);
  });
});
