import './productsArticle.scss';
import { Link } from 'react-router-dom';
import { ProductsArticleType } from './types/productsArticle.interface';

function ProductsArticle({
  id,
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
}: ProductsArticleType) {
  const alternative = `${title} ${brand} $${discountPrice}`;

  return (
    <article className="item item__list">
      <Link
        to={`/articles/${id}`}
        className="item__link"
      >
        <div className="item__section picture">
          <div className="picture__previews">
            <img className="item__image picture__image" src={thumbnail} alt={alternative} loading="lazy" />
          </div>
          {isDiscount ? <div className="item__discount picture__discount">{`${discountPercentage}%`}</div> : null}
        </div>
        <div className="item__section about">
          <h3 className="item__title about__title">{title}</h3>
          <h4 className="item__subtitle about__subtitle">{brand}</h4>
          <p className="item__category about__category">{category}</p>
          <p className="item__description about__description">{description}</p>
        </div>
      </Link>
      <div className="item__section purchase">
        <h3 className="item__price purchase__price">
          <span className={` ${isDiscount ? 'purchase__price_crossed' : ''}`}>
            {`${currency}${price}`}
          </span>
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
