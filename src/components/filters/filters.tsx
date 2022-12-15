import './filters.scss'
import FiltersList from './filtersList/filtersList';
import FilterRange from './filtersRange/filterRange';



const Filters = () => {
    return (
        <aside className="filters">
            <div className="filters__control">
                <button className="filters__control-btn">
                    Reset filters
                </button>
                <button className="filters__control-btn">
                    Copy link
                </button>
            </div>

            <FiltersList title='Category' />
            <FiltersList title='Brand' />
            <FilterRange title='Price'/>
            <FilterRange title='Stock'/>
        </aside >
    );
}


export default Filters;