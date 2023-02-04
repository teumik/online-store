import { useContext } from 'react';
import CartSummaryView from '../../../components/CartPage/CartSummary/CartSummaryView';
import DataContext from '../../../context/data.context';
import ModalContext from '../../../context/modal.context';
import usePromoCodes from '../../../hooks/usePromoCodes';

export default function CartSummary() {
  const ctx = useContext(DataContext);
  const { setModal } = useContext(ModalContext);
  const {
    value,
    promocodes,
    promoInputHandler,
    onAddPromoCode,
    onRemovePromoCode,
  } = usePromoCodes();

  return (
    <CartSummaryView
      totalProducts={ctx.cartItemsCount}
      setModal={setModal}
      value={value}
      promocodes={promocodes}
      promoInputHandler={promoInputHandler}
      onAddPromoCode={onAddPromoCode}
      onRemovePromoCode={onRemovePromoCode}
      enteredPromocodes={ctx.enteredPromocodes}
      cartTotalPrice={ctx.cartTotalPrice}
      cartTotalPriceWithPromocodes={ctx.cartTotalPriceWithPromoCodes}
    />
  );
}
