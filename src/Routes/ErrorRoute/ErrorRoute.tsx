import ErrorPage from '../../components/ErrorPage/ErrorPage';
import MainPage from '../../components/MainPage/MainPage';

function ErrorRoute() {
  return (
    <MainPage className="main-route">
      <ErrorPage />
    </MainPage>
  );
}

export default ErrorRoute;
