import './search.scss';
import SearchIcon from './SearchIcon';
import { SearchType } from './types/search.interface';

function Search({
  value, onReset, onChange,
}: SearchType) {
  return (
    <section
      className="search"
    >
      <form
        className="search__form"
        role="search"
      >
        <input
          data-testid="search"
          type="search"
          name="search"
          placeholder="Search"
          spellCheck="false"
          className="search__input"
          value={value}
          onChange={onChange}
        />
        <button
          data-testid="search-reset"
          type="button"
          className="search__reset search__button"
          onClick={onReset}
        >
          <SearchIcon />
        </button>
      </form>
    </section>
  );
}

export default Search;
