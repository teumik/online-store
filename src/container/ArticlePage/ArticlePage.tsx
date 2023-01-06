import { useParams, Link } from 'react-router-dom';
import { dataController } from '../../controller/data.controller';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { capitalizer } from '../../lib/stringHelpers';
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
  const articlePath = [{ Store: 'Store' }, { category }, { brand }, { search: title }];

  const makeQuery = (name: string, value: string) => `?${new URLSearchParams({ [name]: value }).toString()}`;
  const queries = articlePath.map((el) => {
    const name = Object.keys(el)[0];
    const value = Object.values(el)[0];
    return {
      value,
      query: makeQuery(name, value),
    };
  });

  const links = queries.map((point) => (
    <Link
      to={point.value !== 'Store' ? `/${point.query}` : '/'}
      key={point.value}
      className="details__link"
    >
      <span className="details__point">{capitalizer(point.value)}</span>
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
