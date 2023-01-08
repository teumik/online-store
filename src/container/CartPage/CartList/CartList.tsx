import {
  useContext, useState
} from 'react';

import DataContext from '../../../context/data.context';
import CartListView from '../../../components/CartPage/CartList/CartListView';
import CartContext from '../../../context/cart.context';
import CartListItem from '../CartListItem/CartListItem';
import useCartButtonState from '../../../hooks/useCartButtonState';
import useCartQuery from '../../../hooks/useCartQuery';

function CartList() {
  const {
    page, limit, setParams, setParamsOnChangePage,
  } = useCartQuery();

  const [currentPage, setCurrentPage] = useState(page ? parseInt(page, 10) - 1 : 0);
  const [itemsOnPage, setItemsOnPage] = useState(limit ? parseInt(limit, 10) : 3);
  const dataCtx = useContext(DataContext);
  const { updateCart } = useContext(CartContext);
  const { decreaseItemCount } = useCartButtonState();

  const onSelectPage = (index: number) => {
    setCurrentPage(index);
    setParams('page', index + 1);
  };

  const onChangeItemsOnPage = (e: { target: HTMLInputElement }) => {
    const newItemsOnPageCount = parseInt(e.target.value, 10) || 1;
    setTimeout(() => {
      setParams('limit', newItemsOnPageCount);
    }, 0);

    const allPagesCount = (Math.ceil((dataCtx.cart.idArray.length / newItemsOnPageCount)));
    if ((currentPage + 1) > allPagesCount) {
      setCurrentPage(allPagesCount - 1);
      setParams('page', allPagesCount);
    }
    setItemsOnPage(newItemsOnPageCount);
  };

  const removeItemHandler = (id: number) => {
    decreaseItemCount(id);
    let activePage = 0;

    if ((dataCtx.cart.idArray.length / itemsOnPage) > currentPage) {
      activePage = currentPage;
    } else if ((dataCtx.cart.idArray.length / itemsOnPage - 1) < 0) {
      activePage = 0;
    } else {
      activePage = (dataCtx.cart.idArray.length / itemsOnPage - 1);
    }

    setCurrentPage(Math.floor(activePage));
    setParams('page', activePage + 1);
    updateCart();
  };

  const buttonPageHandler = (oparator: string) => {
    if (oparator === '+') {
      if (currentPage + 1 >= dataCtx.cart.idArray.length / itemsOnPage) return;
      setCurrentPage((p) => p + 1);
      setParamsOnChangePage('+');
    } else {
      if (currentPage === 0) return;
      setCurrentPage((p) => p - 1);
      setParamsOnChangePage('-');
    }
  };

  const cartListItems = dataCtx.cartItems
    .map((item, index) => (
      <CartListItem
        article={item!}
        position={index + 1}
        key={item?.id}
        removeItemHandler={removeItemHandler}
      />
    ));

  function sliceIntoChunks(arr: JSX.Element[], chunkSize: number): JSX.Element[][] {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }

    return res;
  }

  return (
    <CartListView
      elements={sliceIntoChunks(cartListItems, itemsOnPage)}
      itemsCount={cartListItems.length}
      onSelectPage={onSelectPage}
      currentPage={currentPage}
      buttonPageHandler={buttonPageHandler}
      onChangeItemsOnPage={onChangeItemsOnPage}
      itemsOnPage={itemsOnPage}
    />
  );
}

export default CartList;
