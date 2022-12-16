import './App.scss';
import Footer from '../footer/footer';
import Header from '../header/header';
import Filters from '../filters/filters';
import Data from '../../data.json';
import Products from '../products/products';
import DateControl from '../../date.control';

function App() {
  const DateControler = new DateControl(Data.products);

  return (
    <>
      <Header />
      <main className="main">
        <Filters
          categories={DateControler.getUniqCategories()}
          brands={DateControler.getUniqBrands()}
        />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
