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

  return (

    <ProductsView
      countDisplayItems={getCount}
      buttonsElements={buttonsElements}
      buttonsView={buttonsView}
      className={viewState}
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
