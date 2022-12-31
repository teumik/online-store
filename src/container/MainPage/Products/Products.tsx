import { useContext } from 'react';
import ProductsView from '../../../components/MainPage/Products/Products';
import SortButtons from './SortButton/sortButton';
import ProductsArticle from './ProductsArticle/productsArticle';
import DataContext from '../../../context/data.context';
import useViewButton from '../../../hooks/useViewButton';
import GridButton from '../../../components/MainPage/Products/GridButton/GridButton';
import useToggleSort from '../../../hooks/useToggleSort';

function Products() {
  const {
    getCount,
    view,
  } = useContext(DataContext);

  const { viewState, toggleView } = useViewButton();
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
  const { toggleSort, classState } = useToggleSort();
  const buttonsElements = buttonsContent.map((el) => (
    <SortButtons
      key={el.name}
      content={el.name}
      mode={el.mode}
      toggleSort={toggleSort}
      classState={classState}
    />
  ));

  const articleItems = view.map((article) => (
    <ProductsArticle
      key={article.id}
      article={article}
    />
  ));

  return (

    <ProductsView
      countDisplayItems={getCount}
      buttonsElements={buttonsElements}
      buttonsView={buttonsView}
      className={viewState}
    >
      {articleItems}
    </ProductsView>
  );
}

export default Products;
