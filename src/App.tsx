import './App.scss';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Filters from './container/MainPage/Filters/Filters';
import Products from './container/MainPage/Products/Products';
import DataController from './controller/data.controller';
import productsData from './lib/data/productsData.json';
import useUpdateProducts from './hooks/useUpdateProducts';
import ProductsContext from './context/products.context';

function App() {
  const dataController = new DataController(productsData.products);
  const data = dataController.getData;

  return (
    <>
      <Header />
      <main className="main">
        <ProductsContext.Provider value={useUpdateProducts()}>
          <Filters />
          <Products data={data} />
        </ProductsContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
