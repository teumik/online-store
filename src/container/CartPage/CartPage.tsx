import { useContext } from 'react';
import CartPageView from '../../components/CartPage/CartPageView';
import CartContext from '../../context/cart.context';

export default function CartPage() {
  const { cartState } = useContext(CartContext);
  return <CartPageView hasItems={cartState.cartItemsCount > 0} />;
}
