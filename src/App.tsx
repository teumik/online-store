import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Filters from './container/MainPage/Filters/Filters';
import Products from './container/MainPage/Products/Products';
import useUpdateCart from './hooks/useUpdateCart';
import CartContext from './context/cart.context';
import useUpdateProducts from './hooks/useUpdateProducts';
import ProductsContext from './context/products.context';
import CartPageView from './components/CartPage/CartPageView';
import MainPage from './components/MainPage/MainPage';
import BackButton from './components/BackButton/BackButton';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ArticlePage from './container/ArticlePage/ArticlePage';

function App() {
  const cart = useUpdateCart();
  const products = useUpdateProducts();

  return (
    <BrowserRouter>
      <CartContext.Provider value={cart}>
        <Header />
      </CartContext.Provider>
      <Routes>
        <Route
          path="/"
        >
          <Route
            index
            element={(
              <MainPage>
                <ProductsContext.Provider value={products}>
                  <Filters />
                  <CartContext.Provider value={cart}>
                    <Products />
                  </CartContext.Provider>
                </ProductsContext.Provider>
              </MainPage>
            )}
          />
          <Route
            path="cart"
            element={(
              <MainPage>
                <Link to="/">
                  <BackButton preventNavigate />
                </Link>
                <ProductsContext.Provider value={products}>
                  <CartContext.Provider value={cart}>
                    <CartPageView />
                  </CartContext.Provider>
                </ProductsContext.Provider>
              </MainPage>
            )}
          />
        </Route>
        <Route
          path="articles/:articleId"
          element={(
            <MainPage>
              <ProductsContext.Provider value={products}>
                <CartContext.Provider value={cart}>
                  <ArticlePage />
                </CartContext.Provider>
              </ProductsContext.Provider>
            </MainPage>
          )}
        />
        <Route
          path="cart/articles/:articleId"
          element={(
            <MainPage>
              <ProductsContext.Provider value={products}>
                <CartContext.Provider value={cart}>
                  <ArticlePage />
                </CartContext.Provider>
              </ProductsContext.Provider>
            </MainPage>
          )}
        />
        <Route
          path="*"
          element={(
            <MainPage>
              <ErrorPage />
            </MainPage>
          )}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
