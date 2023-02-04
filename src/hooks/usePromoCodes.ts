import { FormEvent, useContext, useState } from 'react';
import CartContext from '../context/cart.context';
import DataContext from '../context/data.context';
import { PromoCode } from '../controller/data.controller';

const usePromoCodes = () => {
  const ctx = useContext(DataContext);
  const [value, setValue] = useState('');
  const { updateCart } = useContext(CartContext);
  const [promocodes, setPromocodes] = useState('');

  const promoInputHandler = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);

    if (ctx.validPromocodes.some((item) => item.name === target.value)) {
      setPromocodes(target.value);
    } else {
      setPromocodes('');
    }
  };

  const onAddPromoCode = () => {
    const promo = ctx.validPromocodes.find((item) => item.name === promocodes);
    if (promo) {
      ctx.enteredPromocodes = [...ctx.enteredPromocodes, promo];
      ctx.removeValidPromocode(promo);
    }
    setPromocodes('');
  };

  const onRemovePromoCode = (promo: PromoCode) => {
    ctx.addValidPromocode(promo);
    ctx.enteredPromocodes = ctx.enteredPromocodes.filter((item) => item !== promo);
    updateCart();
    setValue('');
  };

  return {
    value,
    promocodes,
    promoInputHandler,
    onAddPromoCode,
    onRemovePromoCode,
  };
};

export default usePromoCodes;
