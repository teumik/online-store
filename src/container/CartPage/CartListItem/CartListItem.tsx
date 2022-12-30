import { useContext, useState } from 'react';
import CartListItemView from '../../../components/CartPage/CartListItem/CartListItemView';
import CartContext from '../../../context/cart.context';
import { IData } from '../../../controller/types/data.interface';
import useCartButtonState from '../../../hooks/useCartButtonState';

interface CartListItemProps {
  article: IData;
  position: number;
  removeItemHandler: (id: number) => void;
}

function CartListItem({ article, position, removeItemHandler }: CartListItemProps) {
  const { updateCart } = useContext(CartContext);
  const { increaseItemCount, getCount } = useCartButtonState();
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

  const [value, setValue] = useState(1);

  const onChangeValue = (ID: number, operator: string): void => {
    if (operator === '+') {
      setValue((oldValue) => oldValue + 1);
      if (value + 1) {
        increaseItemCount(ID);
      }
    } else {
      setValue((oldValue) => (oldValue - 1));
      removeItemHandler(ID);
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
      value={getCount(id) || 1}
      onChangeValue={onChangeValue}
    />
  );
}

export default CartListItem;
