import { Outlet } from 'react-router';
import Footer from '../container/Footer/Footer';
import Header from '../container/Header/Header';
import './layout.scss';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
