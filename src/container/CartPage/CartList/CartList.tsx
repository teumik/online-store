import { useContext, useState } from 'react';
import DataContext from '../../../context/data.context';
import CartListView from '../../../components/CartPage/CartList/CartListView';
import CartContext from '../../../context/cart.context';
import CartListItem from '../CartListItem/CartListItem';
import useCartButtonState from '../../../hooks/useCartButtonState';

function CartList() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsOnPage = 3;
  const dataCtx = useContext(DataContext);
  const { updateCart } = useContext(CartContext);
  const { decreaseItemCount } = useCartButtonState();
  const onSelectPage = (index: number) => {
    setCurrentPage(index);
  };

  const removeItemHandler = (id: number) => {
    decreaseItemCount(id);
    let page = 0;

    if ((dataCtx.cart.idArray.length / itemsOnPage) > currentPage) {
      page = currentPage;
    } else if ((dataCtx.cart.idArray.length / itemsOnPage - 1) < 0) {
      page = 0;
    } else {
      page = (dataCtx.cart.idArray.length / itemsOnPage - 1);
    }

    setCurrentPage(Math.floor(page));
    updateCart();
  };

  const buttonPageHandler = (oparator: string) => {
    if (oparator === '+') {
      if (currentPage + 1 >= dataCtx.cart.idArray.length / itemsOnPage) return;
      setCurrentPage((p) => p + 1);
    } else {
      if (currentPage === 0) return;
      setCurrentPage((p) => p - 1);
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
    />
  );
}

export default CartList;
