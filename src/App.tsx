import './App.scss';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import useUpdateCart from './hooks/useUpdateCart';
import CartContext from './context/cart.context';
import useUpdateProducts from './hooks/useUpdateProducts';
import ProductsContext from './context/products.context';
import MainRoute from './Routes/MainRoute/MainRoute';
import ErrorRoute from './Routes/ErrorRoute/ErrorRoute';
import CartRoute from './Routes/CartRoute/CartRoute';
import ArticleRoute from './Routes/ArticleRoute/ArticleRoute';
import ModalContext from './context/modal.context';
import useModalState from './hooks/useModalState';
import queryLoader from './controller/queryLoader';
import Layout from './Routes/Layout';
import CodeErrorPage from './components/CodeErrorPage/CodeErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      loader={queryLoader}
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
