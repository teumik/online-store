import { useContext } from 'react';
import ProductsArticleView from '../../../../components/MainPage/Products/ProductsArticle/ProductsArticle';
import CartContext from '../../../../context/cart.context';
import { IData } from '../../../../controller/types/data.interface';
import CartButton from './CartButton/CartButton';
import roundNumber from '../../../../lib/numberHelpers';

interface ArticleType {
  article: IData;
}

function ProductsArticle({ article }: ArticleType) {
  const {
    id,
    title,
    brand,
    category,
    description,
    price,
    stock,
    thumbnail,
    discountPercentage,
  } = article;
  const { cartState } = useContext(CartContext);
  const { currency } = cartState.cart;
  const discountPrice = cartState.getDiscountPriceByID(id);
  const isDiscount = discountPrice !== price;

  return (
    <ProductsArticleView
      id={id}
      title={title}
      brand={brand}
      category={category}
      description={description}
      price={price}
      stock={stock}
      thumbnail={thumbnail}
      discountPercentage={roundNumber(discountPercentage)}
      currency={currency}
      isDiscount={isDiscount}
      discountPrice={String(discountPrice)}
    >
      <CartButton
        id={id}
      />
    </ProductsArticleView>
  );
}

export default ProductsArticle;
