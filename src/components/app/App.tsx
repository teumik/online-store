import './App.scss';
import Footer from '../footer/footer';
import Header from '../header/header';
import Filters from '../filters/filters';
import DateControler from '../../date.control';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Filters
          categories={DateControler.getUniqCategories()}
          brands={DateControler.getUniqBrands()}

        />
      </main>
      <Footer />
    </>
  );
}

export default App;
