import ProductsView from '../../../components/MainPage/Products/Products';
import useReverseState from '../../../hooks/useReverseState';
import { IData } from '../../../controller/types/data.interface';
import SortButtons from './SortButton/sortButton';
import ProductsArticle from './ProductsArticle/productsArticle';

function Products({ data }: Record<'data', IData[]>) {
  const countDisplayItems = 100;
  const buttonsContent = ['Price', 'Discount'];
  const cutsomHook = useReverseState;
  const buttonsElements = buttonsContent.map((el) => {
    const hook = cutsomHook();
    return (
      <SortButtons
        key={el.toLowerCase()}
        content={el}
        isActive={hook.isActive}
        reverseSort={hook.reverseSort}
      />
    );
  });

  const articles = data.map((el) => (
    <ProductsArticle
      key={el.id}
      article={el}
    />
  ));

  return (
    <ProductsView
      countDisplayItems={countDisplayItems}
      buttonsElements={buttonsElements}
      articles={articles}
    />
  );
}

export default Products;
