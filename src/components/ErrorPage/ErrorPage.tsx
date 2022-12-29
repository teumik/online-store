import './errorPage.scss';
import BackButton from '../BackButton/BackButton';

function ErrorPage() {
  return (
    <section
      className="error"
    >
      <BackButton preventNavigate={false} />
      <div
        className="error__message"
      >
        <h2
          className="error__title"
        >
          404
        </h2>
        <p
          className="error__description"
        >
          ARTICLE NOT FOUND
        </p>
      </div>
    </section>
  );
}

export default ErrorPage;
