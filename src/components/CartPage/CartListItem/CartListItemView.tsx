import './cartListItem.scss';

interface CartListItemViewProps {
  title: string | undefined;
  description: string | undefined;
  rating: number | undefined;
  discount: number | undefined;
  stock: number | undefined;
  price: number | undefined;
  thumbnail: string | undefined;
  position: number | undefined;
  id: number | undefined;
  value: number;
  onChangeValue: (id: number, operator: string) => void;
}

function CartListItemView({
  title,
  description,
  rating,
  discount,
  stock,
  price,
  thumbnail,
  position,
  id,
  value,
  onChangeValue,

}: CartListItemViewProps) {
  return (
    <li className="productsCart__item productsItem">
      <p className="productsItem__pos">{position}</p>
      <img src={thumbnail} alt="img" className="productsItem__thumbnail" />
      <div className="productsItem__info info">
        <h5 className="info__title">{title}</h5>
        <p className="info__descr">
          {description}
        </p>
        <div className="info__addition">
          <p className="info__rating">{rating}</p>
          <p className="info__discount">{discount}</p>
        </div>
      </div>
      <div className="productsItem__stock stock">
        <h6 className="stock__value">
          stock :
          {stock}
        </h6>
        <div className="stock__controls">
          <button onClick={() => onChangeValue(id!, '+')} className="stock__add" type="button"> + </button>
          <span>{value}</span>
          <button onClick={() => onChangeValue(id!, '-')} className="stock__remove" type="button"> - </button>
        </div>
        <p className="stock__price">
          $
          {price! * value}
        </p>
      </div>
    </li>
  );
}

export default CartListItemView;
