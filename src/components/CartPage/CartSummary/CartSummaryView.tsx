import { FormEvent } from 'react';
import { PromoCode } from '../../../controller/data.controller';
import './cartSummary.scss';

export interface CartSummaryViewProps {
  totalProducts: number;
  setModal: () => void;
  value: string;
  promocodes: string;
  promoInputHandler: (e: FormEvent<HTMLInputElement>) => void;
  onAddPromoCode: () => void;
  onRemovePromoCode: (promo: PromoCode) => void;
  enteredPromocodes: PromoCode[];
  cartTotalPriceWithPromocodes: number;
  cartTotalPrice: number;
}

export default function CartSummaryView({
  totalProducts,
  setModal,
  value,
  promocodes,
  promoInputHandler,
  onAddPromoCode,
  onRemovePromoCode,
  enteredPromocodes,
  cartTotalPriceWithPromocodes,
  cartTotalPrice,
}: CartSummaryViewProps) {
  return (
    <div data-testid="summary" className="summary">
      <h2 className="summary__title">Summary</h2>
      <div className="summary__items">
        Total price:
        <div className={cartTotalPriceWithPromocodes < cartTotalPrice
          ? 'lineThrough' : ''}
        >
          {cartTotalPrice}
          $
        </div>
        {cartTotalPriceWithPromocodes === cartTotalPrice
          ? null
          : (
            <div>
              {cartTotalPriceWithPromocodes.toFixed(0)}
              $
            </div>
          )}

      </div>
      <p className="summary__price">
        Products:
        {totalProducts}
      </p>
      <input
        value={value}
        type="text"
        className="summary__promo-input"
        placeholder="Enter promo code"
        onInput={(e) => promoInputHandler(e)}
      />
      <p>For test: RS EPM QQ</p>
      <ul className="summary__promo-list">
        {promocodes ? (
          <li key={promocodes} style={{ listStyle: 'none' }}>
            {promocodes}
            <button className="btn" type="button" onClick={onAddPromoCode}>Add</button>
          </li>
        ) : null}
        {enteredPromocodes.map((item) => (
          <li className="promocode" key={item.name}>
            <p>{item.description}</p>
            <button className="btn" onClick={() => onRemovePromoCode(item)} type="button">Remove</button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={setModal} type="button">buy now</button>
    </div>
  );
}
