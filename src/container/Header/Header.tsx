import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderView from '../../components/Header/Header';
import CartContext from '../../context/cart.context';
import ProductsContext from '../../context/products.context';
import { dataController } from '../../controller/data.controller';
import QueryContext from '../../context/query.context';

function Header() {
  const title = 'Online Shop';
  const { cartState } = useContext(CartContext);
  const { updateProducts } = useContext(ProductsContext);
  const [queryParams, setQueryParams] = useSearchParams();
  const {
    updateQuery, updateSearch,
  } = useContext(QueryContext);

  function clearSearch() {
    dataController.storage.filters.search = '';
    queryParams.delete('search');
    updateQuery('');
    updateSearch('');
    setQueryParams(queryParams);
    updateProducts();
  }

  return (
    <HeaderView
      totalPrice={cartState.cartTotalPrice}
      currency={cartState.cart.currency}
      totalDiscount={String(cartState.cartTotalDiscount)}
      itemsCount={cartState.cartItemsCount}
      title={title}
      onClick={() => {
        dataController.search('');
        clearSearch();
        updateProducts();
      }}
    />
  );
}

export default Header;
