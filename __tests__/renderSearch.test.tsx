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
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('search-reset')).toBeInTheDocument();
    expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('');
  });
});
