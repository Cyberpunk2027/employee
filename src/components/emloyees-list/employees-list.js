import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => { //в компонент приходит data

    const elements = data.map(item => { //перебираем с помощью мар
        const {id, ...itemProps} = item // вытаскиваем id из app.js, остальные пропсы объединяем в св-во ...itemProps
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/> // ...item это обжект спред оператор, разворачивает объект
        )
    })

    return (
        
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList