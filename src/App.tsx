import './App.scss';
import { createContext, useContext, useMemo } from 'react';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Filters from './container/MainPage/Filters/Filters';
import Products from './container/MainPage/Products/Products';
import DataController from './controller/data.controller';
import productsData from './lib/data/productsData.json';
// import ProductsContext from './context/products.context';
import DataContext from './context/data.context';
import useUpdateProducts from './hooks/useUpdateProducts';
import { IData } from './controller/types/data.interface';
import ProductsContext from './context/products.context';

function App() {
  const dataController = new DataController(productsData.products);
  const data = dataController.getData;
  const { productsState, updateProducts } = useUpdateProducts();

  return (
    <>
      <Header />
      <main className="main">
        <Filters />
        <Products data={productsState} />
      </main>
      <Footer />
    </>
  );
}

export default App;
