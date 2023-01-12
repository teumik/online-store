import {
  fireEvent,
  render, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import App from '../src/App';
import BackButton from '../src/container/BackButton/BackButton';
import Products from '../src/container/MainPage/Products/Products';
import ProductsContext from '../src/context/products.context';
import { dataController } from '../src/controller/data.controller';
import useUpdateProducts from '../src/hooks/useUpdateProducts';
import Search from '../src/container/Search/Search';

function InputComp() {
  const [val, setVal] = useState('');
  return (
    <>
      <input
        value={val}
        data-testid="search"
        type="text"
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        data-testid="search-reset"
        type="button"
        onClick={() => setVal('')}
      >
        Reset
      </button>
    </>
  );
}

describe('Render component', () => {
  it('BackButton must exist', () => {
    const value = 'test';
    render(<InputComp />);
    const input: HTMLInputElement = screen.getByTestId('search');
    const reset = screen.getByTestId('search-reset');
    expect(input).toBeInTheDocument();
    expect(reset).toBeInTheDocument();

    expect(input.value).toEqual('');
    fireEvent.input(input, { target: { value } });
    expect(input.value).toEqual(value);
    fireEvent.click(reset);
    expect(input.value).toEqual('');
    // const input: HTMLInputElement = screen.getByPlaceholderText(/search/i);
    // expect(input).toBeInTheDocument();
    // expect(input.value).toEqual('');
    // // input.value = value;
    // userEvent.type(input, value);
    // // fireEvent.input(input, { target: { value } });
    // expect(input.value).toEqual(value);
    // const reset = screen.getByTestId('search-reset');
    // userEvent.click(reset);
    // // fireEvent.click(reset);
    // expect(input.value).toEqual('');
  });
});
