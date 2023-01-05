import { FormEvent, useContext, useState } from 'react';
import CartContext from '../context/cart.context';
import DataContext from '../context/data.context';
import { PromoCode } from '../controller/data.controller';

const usePromoCodes = () => {
  const ctx = useContext(DataContext);
  const [value, setValue] = useState('');
  const { updateCart } = useContext(CartContext);
  const [promocodes, setPromocodes] = useState('');
  const [prices, setPrices] = useState([ctx.cartTotalPrice]);

  const promoInputHandler = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);

    if (ctx.validPromocodes.some((item) => item.name === target.value)) {
      setPromocodes(target.value);
    } else {
      setPromocodes('');
    }
  };

  const calculateNewPriceWithPromocode = () => {
    const totalDiscount = ctx.enteredPromocodes.reduce((acc, item) => acc + item.discount, 0);
    const newPrice = prices[0] - ((prices[0] / 100) * totalDiscount);
    setPrices([ctx.cartTotalPrice, newPrice]);
    if (ctx.enteredPromocodes.length === 0) {
      setPrices([ctx.cartTotalPrice]);
    }
  };

  const onAddPromoCode = () => {
    const promo = ctx.validPromocodes.find((item) => item.name === promocodes);
    if (promo) {
      ctx.enteredPromocodes = [...ctx.enteredPromocodes, promo];
      ctx.removeValidPromocode(promo);
    }
    setPromocodes('');
    calculateNewPriceWithPromocode();
  };

  const onRemovePromoCode = (promo: PromoCode) => {
    ctx.addValidPromocode(promo);
    ctx.enteredPromocodes = ctx.enteredPromocodes.filter((item) => item !== promo);
    updateCart();
    setValue('');
    calculateNewPriceWithPromocode();
  };

  return {
    value,
    promocodes,
    promoInputHandler,
    onAddPromoCode,
    onRemovePromoCode,
    prices,
  };
};

export default usePromoCodes;
