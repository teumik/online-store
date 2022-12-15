import './filterRange.scss'

interface filterRangeProps {
    title: string
}


const FilterRange = (props: filterRangeProps) => {

    let { title } = props
    return (
        <div className="filters__item">
            <h3 className="filters__title">{title}</h3>
            <div className="filters__range-values">
                <p>50</p>
                ⟷
                <p>500</p>
            </div>
            <div className="range__box">
                <input
                    min={10}
                    max={100}
                    step={1}      
                    type="range"
                    className='filters__range-1' />
                <input
                    min={10}
                    max={100}
                    step={1}
                    type="range"
                    className='filters__range-2' />
            </div>
        </div>
    )
}


export default FilterRange

