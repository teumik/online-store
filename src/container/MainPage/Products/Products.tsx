import { useContext } from 'react';
import ProductsView from '../../../components/MainPage/Products/Products';
import useReverseState from '../../../hooks/useReverseState';
import { IData } from '../../../controller/types/data.interface';
import SortButtons from './SortButton/sortButton';
import ProductsArticle from './ProductsArticle/productsArticle';

import ProductsContext from '../../../context/products.context';
import DataContext from '../../../context/data.context';

function Products({ data }: Record<'data', IData[]>) {
  const ctx = useContext(DataContext);
  const { productsState } = useContext(ProductsContext);
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

  const articles = productsState.view.map((el) => (
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
