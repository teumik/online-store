import './App.scss';
import Footer from './components/view/footer/footer';
import Header from './components/view/header/header';
import Filters from './components/view/filters/filters';
import Data from './lib/data/data.json';
import Products from './components/view/products/products';
import DataControl from './components/controller/data.controller';

function App() {
  const dataControler = new DataControl(Data.products);
  const data = dataControler.getData;

  return (
    <>
      <Header />
      <main className="main">
        <Filters
          categories={dataControler.getUniqCategories()}
          brands={dataControler.getUniqBrands()}
        />
        <Products data={data} />
      </main>
      <Footer />
    </>
  );
}

export default App;
