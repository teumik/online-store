import ProductsArticleView from '../../../../components/MainPage/Products/ProductsArticle/ProductsArticle';
import { IData } from '../../../../controller/types/data.interface';
import CartButton from './CartButton/CartButton';

interface ArticleType {
  article: IData;
  isActive: boolean;
}

function ProductsArticle({ article, isActive }: ArticleType) {
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
    discountPercentage,
    images,
  } = article;
  const currency = '$';
  const discountPrice = price * (1 - (discountPercentage || 0) / 100);
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
      rating={rating}
      thumbnail={thumbnail}
      images={images}
      discountPercentage={Number(discountPercentage.toFixed())}
      currency={currency}
      isDiscount={isDiscount}
      discountPrice={discountPrice.toFixed()}
      isActive={isActive}
    >
      <CartButton
        id={id}
      />
    </ProductsArticleView>
  );
}

export default ProductsArticle;
