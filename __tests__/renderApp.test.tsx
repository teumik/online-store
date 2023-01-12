import {
  render, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../src/container/Search/Search';

describe('Render component', () => {
  it('Search Component must exist', () => {
    render(
      <Search />
    );
    const input: HTMLInputElement = screen.getByTestId('search');
    const reset = screen.getByTestId('search-reset');
    expect(input).toBeInTheDocument();
    expect(reset).toBeInTheDocument();
    expect(input.value).toEqual('');
  });
});
