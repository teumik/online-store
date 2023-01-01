import { useContext } from 'react';
import CartPageView from '../../components/CartPage/CartPageView';
import DataContext from '../../context/data.context';

export default function CartPage() {
  const ctx = useContext(DataContext);
  const hasItems = ctx.cart.idArray.length > 0;

  return <CartPageView hasItems={hasItems} />;
}
