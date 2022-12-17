import './productsArticle.scss';
import CartButton from './CartButton/CartButton';
import { IData } from '../../../../controller/types/data.interface';

interface PropData {
  article: IData;
}

function ProductsArticle({ article }: PropData) {
  const {
    title, brand, category, description, price, stock, thumbnail,
  } = article;
  const currency = '$';

  return (
    <article className="item item_list">
      <div className="item__section picture">
        <div className="picture__wrapper">
          <img className="item__image picture__image" src={thumbnail} alt="description" />
        </div>
        <div className="item__discount picture__discount">%</div>
      </div>
      <div className="item__section about">
        <h3 className="item__title about__title">{title}</h3>
        <h4 className="item__subtitle about__subtitle">{brand}</h4>
        <p className="item__category about__category">{category}</p>
        <p className="item__description about__description">{description}</p>
      </div>
      <div className="item__section purchase">
        <h3 className="item__price purchase__price">{`${currency}${price}`}</h3>
        <CartButton />
        <p className="item__count purchase__count">{`Quantity: ${stock}`}</p>
      </div>
    </article>
  );
}

export default ProductsArticle;
