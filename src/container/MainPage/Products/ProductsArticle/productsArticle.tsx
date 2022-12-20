import ProductsArticleView from '../../../../components/MainPage/Products/ProductsArticle/ProductsArticle';
import { IData } from '../../../../controller/types/data.interface';
import CartButton from './CartButton/CartButton';

interface PropData {
  article: IData;
}

function ProductsArticle({ article }: PropData) {
  const currency = '$';

  return (
    <ProductsArticleView article={article} currency={currency}>
      <CartButton />
    </ProductsArticleView>
  );
}

export default ProductsArticle;
