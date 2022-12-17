import './App.scss';
import Footer from './components/view/Footer/Footer';
import Header from './components/view/Header/Header';
import Filters from './components/view/MainPage/Filters/Filters';
import productsData from './lib/data/productsData.json';
import Products from './components/view/MainPage/Products/Products';
import DataController from './components/controller/data.controller';

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
