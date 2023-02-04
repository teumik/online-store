import { useContext } from 'react';
import ProductsView from '../../../components/MainPage/Products/Products';
import SortButtons from './SortButton/SortButton';
import ProductsArticle from './ProductsArticle/ProductsArticle';
import GridButton from '../../../components/MainPage/Products/GridButton/GridButton';
import ProductsContext from '../../../context/products.context';
import QueryContext from '../../../context/query.context';

function Products() {
  const { productsState } = useContext(ProductsContext);
  const {
    viewState, toggleView, toggleSort, classState,
  } = useContext(QueryContext);

  const buttonsView = (
    <GridButton
      viewState={viewState}
      toggleView={toggleView}
    />
  );

  const buttonsContent = [
    { name: 'Price', mode: 'price' as const },
    { name: 'Stock', mode: 'count' as const },
  ];
  const buttonsElements = buttonsContent.map((el) => (
    <SortButtons
      key={el.name}
      content={el.name}
      mode={el.mode}
      toggleSort={toggleSort}
      classState={classState}
    />
  ));

  const articleItems = productsState.view.map((article) => (
    <ProductsArticle
      key={article.id}
      article={article}
    />
  ));

  return (

    <ProductsView
      countDisplayItems={productsState.getCount}
      buttonsElements={buttonsElements}
      buttonsView={buttonsView}
      className={viewState}
    >
      {articleItems}
    </ProductsView>
  );
}

export default Products;
