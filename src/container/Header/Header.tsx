import { useContext } from 'react';
import HeaderView from '../../components/Header/Header';
import CartContext from '../../context/cart.context';
import ProductsContext from '../../context/products.context';
import { dataController } from '../../controller/data.controller';

function Header() {
  const title = 'Online Shop';
  const { cartState } = useContext(CartContext);
  const { updateProducts } = useContext(ProductsContext);

  return (
    <HeaderView
      totalPrice={cartState.cartTotalPrice}
      currency={cartState.cart.currency}
      totalDiscount={String(cartState.cartTotalDiscount)}
      itemsCount={cartState.cartItemsCount}
      title={title}
      onClick={() => {
        dataController.search('');
        updateProducts();
      }}
    />
  );
}

export default Header;
