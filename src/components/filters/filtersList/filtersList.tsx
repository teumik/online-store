import './filtersList.scss';
import FilterListItem from '../filterListItem/filterListItem';

interface filterListProps {
    title: string
}



const categoryTitles: string[] = ['smartphones', 'laptops', 'fragrances', 'skincare', 'laptops', 'fragrances', 'skincare', 'laptops', 'fragrances', 'skincare', 'laptops', 'fragrances', 'skincare']
const brandTitles: string[] = ['apple', 'samsung', 'OPPO', 'Huawei', 'dermive', 'dry rose']
const FiltersList = (props: filterListProps) => {
    let { title } = props;

    const elements: JSX.Element[] = [];

    for (let i = 0; i < categoryTitles.length; i++) {
        elements.push(<FilterListItem title={
            title === 'Category'
                ? categoryTitles[i]
                : brandTitles[i]
        } />)
    }

    return (
        <div className="filters__item">
            <h3 className="filters__title">{title}</h3>
            <div className="filters__list">
                {elements}
            </div>
        </div>
    )


}


export default FiltersList;