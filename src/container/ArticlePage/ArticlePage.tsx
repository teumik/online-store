import './articlePage.scss';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { dataController } from '../../controller/data.controller';
import ProductsArticle from '../MainPage/Products/ProductsArticle/productsArticle';
import BackButton from '../../components/BackButton/BackButton';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { capitalizer, deCapitalizer } from '../../lib/stringHandlers';

function ArticlePage() {
  const { articleId } = useParams();
  const product = dataController.view.find((article) => article.id === Number(articleId));

  if (!product) {
    return (
      <ErrorPage />
    );
  }

  const { title, brand, category } = product;
  const articlePath = ['Store', title, brand, category];

  return (
    <div className="details">
      <BackButton preventNavigate={false} />
      <div className="details__path">
        {articlePath.map((point, i) => (
          <Link
            to={`/#${i !== 0 ? encodeURI(deCapitalizer(point)) : ''}`}
            key={point}
            className="details__link"
          >
            <span
              className="details__point"
            >
              {capitalizer(point)}
            </span>
          </Link>
        ))}
      </div>
      <ProductsArticle
        article={product}
        isActive
      />
    </div>
  );
}

export default ArticlePage;
