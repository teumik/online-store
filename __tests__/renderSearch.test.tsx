import {
  render, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../src/container/Search/Search';

describe('Render component', () => {
  it('Search Component must exist', () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId('search');
    const reset = getByTestId('search-reset');
    expect(input).toBeInTheDocument();
    expect(reset).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toEqual('');
  });
});
