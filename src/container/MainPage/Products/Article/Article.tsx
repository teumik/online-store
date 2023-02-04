import { PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleView from '../../../../components/MainPage/Products/ProductsArticle/Article/Article';
import CartContext from '../../../../context/cart.context';
import { IData } from '../../../../controller/types/data.interface';
import roundNumber from '../../../../lib/numberHelpers';
import ImageComponent from '../../../../components/MainPage/Products/ProductsArticle/Article/ImageComponent/ImageComponent';
import BuyButton from '../../../../components/MainPage/Products/ProductsArticle/Article/BuyNowButton/BuyNowButton';
import ModalContext from '../../../../context/modal.context';

interface ArticleType {
  product: IData;
}

function Article({ product, children }: PropsWithChildren<ArticleType>) {
  const {
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
  } = product;
  const { cartState, updateCart } = useContext(CartContext);
  const { currency } = cartState.cart;
  const discountPrice = cartState.getDiscountPriceByID(id);
  const isDiscount = discountPrice !== price;
  const { setModal } = useContext(ModalContext);
  const [activeLink, setActiveLink] = useState(thumbnail);
  const alt = `${title} ${brand} $${discountPrice}`;
  const imagesItem = images.map((link) => {
    const baseClass = 'article__button picture__button';
    const activeClass = 'article__button picture__button picture__button_active';
    const className = activeLink === link ? activeClass : baseClass;
    return (
      <ImageComponent
        key={link}
        link={link}
        alt={alt}
        className={className}
        click={() => setActiveLink(link)}
      />
    );
  });

  const navigate = useNavigate();

  const [openState, setState] = useState(false);

  return (
    <ArticleView
      id={id}
      title={title}
      brand={brand}
      category={category}
      description={description}
      price={price}
      stock={stock}
      rating={rating}
      thumbnail={activeLink}
      discountPercentage={roundNumber(discountPercentage)}
      discountPrice={String(discountPrice)}
      isDiscount={isDiscount}
      currency={currency}
      imagesItem={imagesItem}
      alt={alt}
      activeLink={activeLink}
      openState={openState}
      toggleModal={() => setState((state) => !state)}
    >
      {children}
      <BuyButton
        click={() => {
          if (!cartState.isInCart(id)) cartState.setCartItem(String(id));
          updateCart();
          navigate('/cart');
          setModal();
        }}
      />
    </ArticleView>
  );
}

export default Article;
