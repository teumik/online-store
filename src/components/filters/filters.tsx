import './filters.scss'
import FiltersList from './filtersList/filtersList';
import FilterRange from './filtersRange/filterRange';

interface filtersProps {
    categories: string[]
    brands: string[]
}

const Filters = (props: filtersProps) => {
    let { categories, brands } = props;
   
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

            <FiltersList filterTitle='Category' values={categories} />
            <FiltersList filterTitle='Brand' values={brands} />
            <FilterRange title='Price' />
            <FilterRange title='Stock' />
        </aside >
    );
}


export default Filters;