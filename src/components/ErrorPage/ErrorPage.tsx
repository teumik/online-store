import './errorPage.scss';
import BackButton from '../../container/BackButton/BackButton';

function ErrorPage() {
  return (
    <section className="error">
      <BackButton />
      <div className="error__message">
        <h2 className="error__title">404</h2>
        <p className="error__description">Page Not Found</p>
      </div>
    </section>
  );
}

export default ErrorPage;
