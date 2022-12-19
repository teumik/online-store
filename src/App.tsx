import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Filters from './container/MainPage/Filters/Filters';

import Products from './components/MainPage/Products/Products';

import DC from './controller/data.controller';

function App() {
  const data = DC.getData;

  return (
    <>
      <Header />
      <main className="main">
        <Filters />
        <Products data={data} />
      </main>
      <Footer />
    </>
  );
}

export default App;
