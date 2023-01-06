import './App.scss';
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import useUpdateCart from './hooks/useUpdateCart';
import CartContext from './context/cart.context';
import useUpdateProducts from './hooks/useUpdateProducts';
import ProductsContext from './context/products.context';
import MainRoute from './Routes/MainRoute/MainRoute';
import ErrorRoute from './Routes/ErrorRoute/ErrorRoute';
import CartRoute from './Routes/CartRoute/CartRoute';
import ArticleRoute from './Routes/ArticleRoute/ArticleRoute';
import ModalContext from './context/modal.context';
import CodeErrorPage from './components/CodeErrorPage/CodeErrorPage';
import useModalState from './hooks/useModalState';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const view = url.searchParams.get('view');
  if (view !== null && view !== 'list' && view !== 'grid') {
    url.searchParams.delete('view');
    globalThis.location.replace(url.href);
  }
  const sort = url.searchParams.get('sort');
  if (sort !== null && sort !== 'price' && sort !== 'count') {
    url.searchParams.delete('sort');
    globalThis.location.replace(url.href);
  }
  const type = url.searchParams.get('type');
  if (type !== null && type !== 'up' && type !== 'down') {
    url.searchParams.delete('type');
    globalThis.location.replace(url.href);
  }
  return null;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      loader={loader}
      errorElement={<CodeErrorPage />}
    >
      <Route
        index
        element={<MainRoute />}
      />
      <Route
        path="cart"
        element={<CartRoute />}
      />
      <Route
        path="articles/:articleId"
        element={<ArticleRoute />}
      />
      <Route
        path="*"
        element={<ErrorRoute />}
      />
    </Route>
  )
);

function App() {
  const cart = useUpdateCart();
  const products = useUpdateProducts();
  const modal = useModalState();

  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={cart}>
        <ModalContext.Provider value={modal}>
          <RouterProvider router={router} />
        </ModalContext.Provider>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
