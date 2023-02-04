import { PropsWithChildren } from 'react';
import './article.scss';
import { ArticleType } from './types/article.interface';
import CloseIcon from './CloseIcon';

function Article({
  title,
  brand,
  category,
  description,
  price,
  stock,
  rating,
  thumbnail,
  discountPercentage,
  currency,
  children,
  isDiscount,
  imagesItem,
  alt,
  activeLink,
  openState,
  toggleModal,
}: PropsWithChildren<ArticleType>) {
  return (
    <article className="article">
      {openState ? (
        <div
          className="overlay"
          onClick={toggleModal}
          aria-hidden="true"
          role="button"
        >
          <div className="modal">
            <img className="article__image picture__open modal__image" src={activeLink} alt={alt} />
            <button
              className="modal__close"
              type="button"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      ) : null}
      <h3 className="article__title">{title}</h3>
      <div className="article__section picture">
        <div className="picture__previews">
          {imagesItem}
        </div>
        <button
          className="article__button picture__button"
          type="button"
          onClick={toggleModal}
        >
          <img className="article__image picture__current" src={thumbnail} alt={alt} />
        </button>
        {isDiscount && <div className="article__discount picture__discount">{`${discountPercentage}%`}</div>}
      </div>
      <div className="article__section about">
        <h4 className="article__subtitle about__subtitle">
          <div className="article__subtitle_bold">Brand:</div>
          {brand}
        </h4>
        <div className="article__category about__category">
          <div className="article__subtitle_bold">Category:</div>
          {category}
        </div>
        <div className="article__description about__description">
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
      <div className="article__section purchase">
        <h3 className="article__price purchase__price">
          {`${currency}${price}`}
        </h3>
        {children}
      </div>
    </article>
  );
}

export default Article;
