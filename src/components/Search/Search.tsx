import './search.scss';
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
          type="search"
          name="search"
          placeholder="Search"
          className="search__input"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="search__reset search__button"
          onClick={onReset}
        >
          ✖
        </button>
      </form>
    </section>
  );
}

export default Search;
