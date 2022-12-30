import { useContext } from 'react';
import HeaderView from '../../components/Header/Header';
import CartContext from '../../context/cart.context';

function Header() {
  const title = 'Online Shop';
  const { cartState } = useContext(CartContext);

  return (
    <HeaderView
      totalPrice={cartState.cartTotalDiscountPrice}
      currency={cartState.cart.currency}
      totalDiscount={String(cartState.cartTotalDiscount)}
      itemsCount={cartState.cartItemsCount}
      title={title}
    />
  );
}

export default Header;
