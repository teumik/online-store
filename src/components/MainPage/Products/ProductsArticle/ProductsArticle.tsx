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
  rating,
  thumbnail,
  images,
  discountPercentage,
  currency,
  children,
  isDiscount,
  discountPrice,
  isActive,
}: ProductsArticleType) {
  const alternative = `${title} ${brand} $${discountPrice}`;

  return isActive ? (
    <article className="item item_list article">
      <h3 className="article__title">{title}</h3>
      <div className="item__section picture">
        <div className="picture__previews">
          {images.map((url) => (
            <img
              key={url}
              className="item__image picture__image"
              src={url}
              alt={alternative}
            />
          ))}
        </div>
        <img className="item__image picture__current" src={thumbnail} alt={alternative} />
        {isDiscount ? <div className="item__discount picture__discount">{`${discountPercentage}%`}</div> : null}
      </div>
      <div className="item__section about">
        <h4 className="article__subtitle item__subtitle about__subtitle">
          <div className="article__subtitle_bold">Brand:</div>
          {brand}
        </h4>
        <div className="item__category about__category">
          <div className="article__subtitle_bold">Category:</div>
          {category}
        </div>
        <div className="item__description about__description">
          <div className="article__subtitle_bold">Description:</div>
          {description}
        </div>
        <div className="article__rating about__rating">
          <div className="article__subtitle_bold">Rating:</div>
          {rating}
        </div>
        <div className="article__rating about__stock">
          <div className="article__subtitle_bold">Quantity:</div>
          {stock}
        </div>
      </div>
      <div className="item__section purchase">
        <h3 className="item__price purchase__price">
          <span className={` ${isDiscount ? 'purchase__price_crossed' : ''}`}>
            {`${currency}${price}`}
          </span>
          {
            isDiscount ? (
              <span className="item__price_discount purchase__price_discount">
                {` ${currency}${discountPrice}`}
              </span>
            ) : null
          }
        </h3>
        {children}
        <button className="purchase__button" type="button">Buy Now</button>
      </div>
    </article>
  ) : (
    <article className="item item_list">
      <Link
        to={`articles/${id}`}
        className={isActive ? 'item__link item__link_active' : 'item__link'}
      >
        <div className="item__section picture">
          <div className="picture__previews">
            <img className="item__image picture__image" src={thumbnail} alt={alternative} />
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
