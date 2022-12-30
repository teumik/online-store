import { useContext, useState } from 'react';
import CartListItemView from '../../../components/CartPage/CartListItem/CartListItemView';
import CartContext from '../../../context/cart.context';
import DataContext from '../../../context/data.context';
import { IData } from '../../../controller/types/data.interface';

interface CartListItemProps {
  article: IData;
  position: number;
  removeItemHandler: (id: number) => void;
}

function CartListItem({ article, position, removeItemHandler }: CartListItemProps) {
  const ctx = useContext(DataContext);
  const { updateCart } = useContext(CartContext);
  const {
    title,
    description,
    rating,
    discountPercentage,
    stock,
    price,
    thumbnail,
    id,
  } = article;

  // const initialCount = ctx.getInitialCountItemInCart(id);
  // const [value, setValue] = useState(initialCount);
  const [value, setValue] = useState(1);

  const onChangeValue = (ID: number, operator: string): void => {
    if (operator === '+') {
      setValue((oldValue) => oldValue + 1);
      if (value + 1) {
        // ctx.cart.idArray.push({ id: ID, count: value });
      }
    } else {
      setValue((oldValue) => (oldValue - 1));
      if (value - 1 < 1) {
        removeItemHandler(id);
      }
    }

    updateCart();
  };

  return (
    <CartListItemView
      title={title}
      description={description}
      rating={rating}
      discount={discountPercentage}
      stock={stock}
      price={price}
      thumbnail={thumbnail}
      position={position}
      id={id}
      value={value}
      onChangeValue={onChangeValue}
    />
  );
}

export default CartListItem;
