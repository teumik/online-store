import ProductsArticleView from '../../../../components/MainPage/Products/ProductsArticle/ProductsArticle';
import { ProductsArticleType } from '../../../../components/MainPage/Products/ProductsArticle/types/productsArticle.interface';
import CartButton from './CartButton/CartButton';

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
}: Omit<ProductsArticleType, 'currency' | 'children' | 'isDiscount' | 'discountPrice'>) {
  const currency = '$';
  const discountPrice = price * (1 - (discountPercentage || 0) / 100);
  const isDiscount = discountPrice !== price;

  return (
    <ProductsArticleView
      title={title}
      brand={brand}
      category={category}
      description={description}
      price={price}
      stock={stock}
      thumbnail={thumbnail}
      discountPercentage={Number(discountPercentage.toFixed())}
      currency={currency}
      isDiscount={isDiscount}
      discountPrice={discountPrice.toFixed()}
    >
      <CartButton
        id={id}
      />
    </ProductsArticleView>
  );
}

export default ProductsArticle;
