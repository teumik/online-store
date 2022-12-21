import { useContext } from 'react';
import CartView from '../../../components/Header/Cart/Cart';
import CartContext from '../../../context/cart.context';

function Cart() {
  const { cartState } = useContext(CartContext);

  return (
    <CartView
      currency={cartState.cart.currency}
      totalPrice={cartState.cartTotalPrice}
      totalDiscount={cartState.cartTotalDiscount}
      itemsCount={cartState.cartItemsCount}
    />
  );
}

export default Cart;
