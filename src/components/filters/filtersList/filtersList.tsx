import './filtersList.scss';
import FilterListItem from '../filterListItem/filterListItem';

interface filterListProps {
    filterTitle: string
    values: string[]
}


const FiltersList = (props: filterListProps) => {
    let { filterTitle, values } = props;

    const elements: JSX.Element[] = values.map((item: string) => {
        return <FilterListItem title={item} />
    })

    return (
        <div className="filters__item">
            <h3 className="filters__title">{filterTitle}</h3>
            <div className="filters__list">
                {elements}
            </div>
        </div>
    )

}


export default FiltersList;