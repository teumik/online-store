import { useContext, useState } from 'react';

import DataContext from '../../../context/data.context';
import CartListView from '../../../components/CartPage/CartList/CartListView';
import CartListItemView from '../../../components/CartPage/CartListItem/CartListItemView';
import CartContext from '../../../context/cart.context';

function CartList() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsOnPage = 3;
  const dataCtx = useContext(DataContext);
  const { updateCart } = useContext(CartContext);

  const onSelectPage = (index: number) => {
    setCurrentPage(index);
  };

  const removeItemHandler = (id: number) => {
    dataCtx.removeCartItem(id);
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

  const cartListItems = dataCtx.cartItems
    .map((item, index) => (
      <CartListItemView
        position={index + 1}
        title={item?.title}
        key={item?.id}
        description={item?.description}
        rating={item?.rating}
        discount={item?.discountPercentage}
        stock={item?.stock}
        price={item?.price}
        thumbnail={item?.thumbnail}
        id={item?.id}
        removeItemHandler={removeItemHandler}
      />
    ));

  function sliceIntoChunks(arr: JSX.Element[], chunkSize: number) {
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
    />
  );
}

export default CartList;
