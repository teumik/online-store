import { useSearchParams } from 'react-router-dom';

const useCartQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const limit = searchParams.get('limit');

  const setParams = (param: string, value: number) => {
    searchParams.set(param.toLowerCase(), value.toString());
    setSearchParams(searchParams);
  };

  const setParamsOnChangePage = (operator: string) => {
    const param = searchParams.get('page');

    if (param) {
      let value = parseInt(param, 10);
      value = operator === '+' ? value + 1 : value - 1;

      setParams('page', value);
    } else {
      setParams('page', 2);
    }
  };

  return {
    page, limit, setParams, setParamsOnChangePage,
  };
};

export default useCartQuery;
