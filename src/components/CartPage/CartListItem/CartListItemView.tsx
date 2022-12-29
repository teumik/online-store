import { IData } from '../../../controller/types/data.interface';
import './cartListItem.scss';

function CartListItemView({ article, count }: {article: IData; count: number}) {
  return (
    <li className="productsCart__item productsItem">
      <p className="productsItem__pos">{count}</p>
      <img src={article.thumbnail} alt="img" className="productsItem__thumbnail" />
      <div className="productsItem__info info">
        <h5 className="info__title">{article.title}</h5>
        <p className="info__descr">
          {article.description}
        </p>
        <div className="info__addition">
          <p className="info__rating">{article.rating}</p>
          <p className="info__discount">{article.discountPercentage}</p>
        </div>
      </div>
      <div className="productsItem__stock stock">
        <h6 className="stock__value">{article.stock}</h6>
        <div className="stock__controls">
          <button className="stock__add" type="button"> + </button>
          <span>1</span>
          <button className="stock__remove" type="button"> - </button>
        </div>
        <p className="stock__price">{article.price}</p>
      </div>
    </li>
  );
}

export default CartListItemView;
