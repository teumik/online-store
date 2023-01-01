import { useContext } from 'react';
import ModalContext from '../../../context/modal.context';

import './cartSummary.scss';

interface CartSummaryViewProps {
  totalProducts: number;
  totalPrice: number;
}

function CartSummaryView({
  totalProducts,
  totalPrice,
}: CartSummaryViewProps) {
  const { setModal } = useContext(ModalContext);
  return (
    <div className="summary">
      <h2 className="summary__title">Summary</h2>
      <form className="summary__form">
        <p className="summary__total-items">
          Products:
          {totalProducts}
        </p>
        <p className="summary__total-price">
          Total:
          {totalPrice}
        </p>
        <input type="text" className="summary__input" placeholder="Enter promo code" />
        <p className="summary__input-placeholder">Promo for test: &quot;RS&quot; , &quot;ERM&quot;</p>
      </form>
      <button onClick={setModal} type="button">buy now</button>

    </div>
  );
}

export default CartSummaryView;
