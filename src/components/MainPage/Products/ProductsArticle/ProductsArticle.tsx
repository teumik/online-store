import './productsArticle.scss';
import { ProductsArticleType } from './types/productsArticle.interface';

function ProductsArticle({
  title,
  brand,
  category,
  description,
  price,
  stock,
  thumbnail,
  discountPercentage,
  currency,
  children,
  isDiscount,
  discountPrice,
}: Omit<ProductsArticleType, 'id'>) {
  return (
    <article className="item item_list">
      <div className="item__section picture">
        <div className="picture__wrapper">
          <img className="item__image picture__image" src={thumbnail} alt="description" />
        </div>
        <div className="item__discount picture__discount">{`-${discountPercentage}%`}</div>
      </div>
      <div className="item__section about">
        <h3 className="item__title about__title">{title}</h3>
        <h4 className="item__subtitle about__subtitle">{brand}</h4>
        <p className="item__category about__category">{category}</p>
        <p className="item__description about__description">{description}</p>
      </div>
      <div className="item__section purchase">
        <h3 className="item__price purchase__price">
          <span className={` ${isDiscount ? 'purchase__price_crossed' : ''}`}>{`${currency}${price}`}</span>
          {
            (isDiscount) ? (
              <span className="item__price_discount purchase__price_discount">
                {` ${currency}${discountPrice}`}
              </span>
            ) : null
          }
        </h3>
        {children}
        <p className="item__count purchase__count">{`Quantity: ${stock}`}</p>
      </div>
    </article>
  );
}

export default ProductsArticle;
