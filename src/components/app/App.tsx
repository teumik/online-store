import './App.scss';
import Footer from '../footer/footer';
import Header from '../header/header';
import Filters from '../filters/filters';
import Data from '../../data.json';

import { DateControl } from '../../date.control';

function App() {
  let DateControler = new DateControl(Data.products);

  return (
    <>
      <Header />
      <Filters
        categories={DateControler.getUniqCategories()}
        brands={DateControler.getUniqBrands()} />
      <Footer />
    </>
  );
}

export default App;
