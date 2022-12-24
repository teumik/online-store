import { useContext } from 'react';
import ProductsView from '../../../components/MainPage/Products/Products';
import useReverseState from '../../../hooks/useReversePrice';
import SortButtons from './SortButton/sortButton';
import ProductsArticle from './ProductsArticle/productsArticle';
import DataContext from '../../../context/data.context';

function Products() {
  const {
    getCount,
    view,
    sortPriceAscending, sortPriceDescending,
    sortStockAscending, sortStockDescending,
  } = useContext(DataContext);

  const countDisplayItems = getCount;
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

  return (
    <ProductsView
      countDisplayItems={countDisplayItems}
      buttonsElements={buttonsElements}
    >
      {view.map((el) => (
        <ProductsArticle
          key={el.id}
          id={el.id}
          title={el.title}
          brand={el.brand}
          category={el.category}
          description={el.description}
          price={el.price}
          stock={el.stock}
          thumbnail={el.thumbnail}
          discountPercentage={el.discountPercentage.toFixed()}
        />
      ))}
    </ProductsView>
  );
}

export default Products;
