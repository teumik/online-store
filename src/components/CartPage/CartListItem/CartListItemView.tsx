import { Link } from 'react-router-dom';
import './cartListItem.scss';

interface CartListItemViewProps {
  title: string;
  description: string;
  rating: number;
  discount: number;
  stock: number;
  price: number;
  thumbnail: string;
  position: number;
  id: number;
  value: number;
  onChangeValue: (id: number, operator: string) => void;
}

export default function CartListItemView({
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
      <Link to={`/articles/${id}`}>
        <img src={thumbnail} alt="img" className="productsItem__thumbnail" />
      </Link>
      <Link to={`/articles/${id}`}>
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
      </Link>
      <div className="productsItem__stock stock">
        <h6 className="stock__value">
          stock :
          {stock}
        </h6>
        <div className="stock__controls">
          <button onClick={() => onChangeValue(id, '-')} className="stock__remove btn" type="button"> - </button>
          <span>{value}</span>
          <button onClick={() => onChangeValue(id, '+')} disabled={value >= stock} className="stock__add btn" type="button"> + </button>
        </div>
        <p className="stock__price">

          {price * value}
          $
        </p>
      </div>
    </li>
  );
}
