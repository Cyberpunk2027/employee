import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rised', label: 'На повышение'},
        {name: 'moreThan1000', label: 'Больше $1000'}
    ]

    const buttons = buttonsData.map(({name, label}) => { // перебираем данные в buttonsData
        const active = props.filter === name // проверяем равен ли пропс текущему имени в состоянии, при положительном исходе переменная вернет true
        const clazz = active ? "btn-light" : "btn-outline-light" //если active = true, то передаём в него btn-light, если false, то btn-outline-light
        return (
            <button 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)} /*передаем стрелочную фун-ю, т.к. надо передать аргумент*/> 
                {label}
        </button>
        )
    })


    return(
    <div className="btn-group">
        {buttons}
    </div>)
}

export default AppFilter