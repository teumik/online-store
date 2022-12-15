import './filterListItem.scss'

interface filterItemProps {
    title: string
}


const filterListItem = (props: filterItemProps) => {

    let { title } = props;

    return (
        <li className="filters__list-item">
            <input type="checkbox" className="filters__list-checkbox" id={title} />
            <label htmlFor={title} className="filters__list-label"> {title} </label>
            <p className="filters__list-stock">5/5</p>
        </li>

    )

}


export default filterListItem;