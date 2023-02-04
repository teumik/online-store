import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartPageView from '../src/components/CartPage/CartPageView';
import '@testing-library/jest-dom';

describe('render CartPage component', () => {
  it('render empty cart message', () => {
    render(
      <BrowserRouter>
        <CartPageView hasItems={false} />
      </BrowserRouter>
    );
    const message = screen.getByText(/Cart is empty/);
    expect(message).toBeInTheDocument();
  });

  it('render cart list with not empty cart', () => {
    render(
      <BrowserRouter>
        <CartPageView hasItems />
      </BrowserRouter>
    );
    const productsLIst: HTMLDivElement = screen.getByTestId('productsCart');
    const productsSummary: HTMLDivElement = screen.getByTestId('summary');

    expect(productsLIst).toBeInTheDocument();
    expect(productsSummary).toBeInTheDocument();
  });
});
