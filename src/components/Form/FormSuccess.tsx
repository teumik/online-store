import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import CartContext from '../../context/cart.context';
import DataContext from '../../context/data.context';

export default function FormSuccess() {
  const navigator = useNavigate();
  const ctx = useContext(DataContext);
  const { updateCart } = useContext(CartContext);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      ctx.cart.idArray = [];
      updateCart();
      navigator('/');

      clearTimeout(timeOut);
    }, 3000);
  });

  return (
    <h1
      className="success__message"
    >
      {' '}
      Form completed successfully

    </h1>
  );
}
