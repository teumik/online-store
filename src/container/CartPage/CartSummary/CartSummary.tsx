import { useContext } from 'react';
import CartSummaryView from '../../../components/CartPage/CartSummary/CartSummaryView';
import DataContext from '../../../context/data.context';

function CartSummary() {
  const ctx = useContext(DataContext);
  const totalPrice = ctx.cartTotalPrice;
  const totalProducts = ctx.cartItemsCount;

  return (
    <CartSummaryView
      totalProducts={totalProducts}
      totalPrice={totalPrice}
    />
  );
}

export default CartSummary;
