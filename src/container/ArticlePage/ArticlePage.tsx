import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { dataController } from '../../controller/data.controller';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { capitalizer, deCapitalizer } from '../../lib/stringHelpers';
import Details from '../../components/Details/Details';
import CartButton from '../MainPage/Products/ProductsArticle/CartButton/CartButton';
import Article from '../MainPage/Products/Article/Article';

function ArticlePage() {
  const { articleId } = useParams();
  const product = dataController.view.find((article) => article.id === Number(articleId));
  if (!product) return <ErrorPage />;

  const {
    id,
    title,
    brand,
    category,
  } = product;
  const articlePath = ['Store', title, brand, category];
  const links = articlePath.map((point, i) => (
    <Link
      to={`/#${i !== 0 ? encodeURI(deCapitalizer(point)) : ''}`}
      key={point}
      className="details__link"
    >
      <span className="details__point">{capitalizer(point)}</span>
    </Link>
  ));

  return (
    <Details
      navigate={false}
      links={links}
    >
      <Article
        product={product}
      >
        <CartButton
          id={id}
        />
      </Article>
    </Details>
  );
}

export default ArticlePage;
