import { useContext } from 'react';
import ProductsView from '../../../components/MainPage/Products/Products';
import useReverseState from '../../../hooks/useReversePrice';
import SortButtons from './SortButton/sortButton';
import ProductsArticle from './ProductsArticle/productsArticle';
import DataContext from '../../../context/data.context';

function Products() {
  const ctx = useContext(DataContext);
  const {
    view,
    sortPriceAscending, sortPriceDescending,
    sortStockAscending, sortStockDescending,
  } = ctx;

  const countDisplayItems = ctx.getCount;
  const buttonsContent = [
    { name: 'Price', hook: useReverseState, sort: [sortPriceAscending, sortPriceDescending] },
    { name: 'Stock', hook: useReverseState, sort: [sortStockAscending, sortStockDescending] },
  ];
  const buttonsElements = buttonsContent.map((el) => {
    const hook = el.hook(el.sort[0], el.sort[1]);
    return (
      <SortButtons
        key={el.name.toLowerCase()}
        content={el.name}
        isActive={hook.isActive}
        reverseSort={hook.reverseSort}
      />
    );
  });

  const articles = view.map((el) => (
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
