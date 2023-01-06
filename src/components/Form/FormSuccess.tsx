import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import CartContext from '../../context/cart.context';
import DataContext from '../../context/data.context';

export default function FormSuccess() {
  const navigator = useNavigate();
  const ctx = useContext(DataContext);
  const { updateCart } = useContext(CartContext);
  useEffect(() => {
    setTimeout(() => {
      ctx.cart.idArray = [];
      updateCart();
      navigator('/');
    }, 3000);
  });

  return (
    <h1 style={{ textAlign: 'center' }}> Form completed successfully</h1>
  );
}
