import { useContext } from 'react';
import HeaderView from '../../components/Header/Header';
import CartContext from '../../context/cart.context';

function Header() {
  const title = 'Online Shop';
  const { cartState } = useContext(CartContext);
  return (
    <HeaderView
      totalPrice={cartState.cartTotalPrice}
      currency={cartState.cart.currency}
      totalDiscount={cartState.cartTotalDiscount.toFixed()}
      itemsCount={cartState.cartItemsCount}
      title={title}
    />
  );
}

export default Header;
