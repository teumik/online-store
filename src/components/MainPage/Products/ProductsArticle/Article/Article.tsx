import { PropsWithChildren } from 'react';
import './article.scss';
import { ArticleType } from './types/article.interface';

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
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20V15H4C3.44772 15 3 14.5523 3 14Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14 3C14.5523 3 15 3.44772 15 4V9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4C13 3.44772 13.4477 3 14 3Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929Z" />
              </svg>
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
