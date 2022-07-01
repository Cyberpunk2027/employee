import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onAdd, onToggleIncrease, onToggleRise}) => { //в компонент приходит data и кнопки 

    const elements = data.map(item => { //перебираем с помощью мар
        const {id, ...itemProps} = item // вытаскиваем id из app.js, остальные пропсы объединяем в св-во ...itemProps
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps} // ...item это обжект спред оператор, разворачивает объект
            onDelete={() => onDelete(id)} //удаление сотрудника
            onAdd={() => onAdd(id)} //добавление сотрудника
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/>  
        )
    })

    return (
        
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList