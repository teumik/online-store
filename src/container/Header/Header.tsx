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
    updateQuery, updateSearch, setSort, setInit,
  } = useContext(QueryContext);

  function clearSearch() {
    dataController.storage.filters.search = '';
    queryParams.delete('search');
    updateQuery('');
    updateSearch('');
    setQueryParams(queryParams);
  }

  function clearSort() {
    queryParams.delete('sort');
    queryParams.delete('type');
    const temp = {
      price: false,
      count: false,
    };
    setInit(temp);
    setSort(temp);
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
        clearSort();
        updateProducts();
      }}
    />
  );
}

export default Header;
