import CartView from '../../../components/Header/Cart/Cart';
import { CartProps } from '../../../components/Header/Cart/types/cart.interface';

function Cart(props: CartProps) {
  const {
    totalPrice,
    currency,
    totalDiscount,
    itemsCount,
  } = props;
  return (
    <CartView
      totalPrice={totalPrice}
      currency={currency}
      totalDiscount={totalDiscount}
      itemsCount={itemsCount}
    />
  );
}

export default Cart;
