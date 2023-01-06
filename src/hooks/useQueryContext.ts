import useSearch from './useSearch';
import useViewButton from './useViewButton';
import useToggleSort from './useToggleSort';

function useQueryContext() {
  const { searchQuery, updateQuery, updateSearch } = useSearch();
  const { viewState, toggleView } = useViewButton();
  const {
    toggleSort, classState, setSort, setInit,
  } = useToggleSort();

  return {
    viewState,
    toggleView,
    toggleSort,
    classState,
    searchQuery,
    updateQuery,
    updateSearch,
    setSort,
    setInit,
  };
}

export default useQueryContext;
