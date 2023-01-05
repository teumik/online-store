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
  prices: number[];
  enteredPromocodes: PromoCode[];
}

export default function CartSummaryView({
  totalProducts,
  setModal,
  value,
  promocodes,
  promoInputHandler,
  onAddPromoCode,
  onRemovePromoCode,
  prices,
  enteredPromocodes,

}: CartSummaryViewProps) {
  return (
    <div className="summary">
      <h2 className="summary__title">Summary</h2>
      <div className="summary__items">
        Price:
        {prices.map((price) => (
          <div
            className={prices.length > 1 ? 'lineThrough' : ''}
            key={price}
          >
            {price.toFixed(0)}
          </div>
        ))}
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
            <button type="button" onClick={onAddPromoCode}>Add</button>
          </li>
        ) : null}

        {enteredPromocodes.map((item) => (
          <li className="promocode" key={item.name}>
            <p>{item.description}</p>
            <button onClick={() => onRemovePromoCode(item)} type="button">Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={setModal} type="button">buy now</button>
    </div>
  );
}
