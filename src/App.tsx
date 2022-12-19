import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Filters from './components/MainPage/Filters/Filters';
import productsData from './lib/data/productsData.json';
import Products from './components/MainPage/Products/Products';
import DataController from './controller/data.controller';

function App() {
  const dataController = new DataController(productsData.products);
  const data = dataController.getData;

  return (
    <>
      <Header />
      <main className="main">
        <Filters
          categories={dataController.getUniqCategories()}
          brands={dataController.getUniqBrands()}
        />
        <Products data={data} />
      </main>
      <Footer />
    </>
  );
}

export default App;
