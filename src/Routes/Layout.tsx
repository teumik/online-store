import './layout.scss';
import { useContext } from 'react';
import { Outlet } from 'react-router';
import Footer from '../container/Footer/Footer';
import Header from '../container/Header/Header';
import QueryContext from '../context/query.context';
import useQueryContext from '../hooks/useQueryContext';
import DataContext from '../context/data.context';

function Layout() {
  const query = useQueryContext();
  const { clearFilters } = useContext(DataContext);
  clearFilters();

  return (
    <QueryContext.Provider value={query}>
      <Header />
      <Outlet />
      <Footer />
    </QueryContext.Provider>
  );
}

export default Layout;
