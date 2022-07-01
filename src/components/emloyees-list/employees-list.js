import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onAdd, onToggleProp}) => { //в компонент приходит data и кнопки 

    const elements = data.map(item => { //перебираем с помощью мар
        const {id, ...itemProps} = item // вытаскиваем id из app.js, остальные пропсы объединяем в св-во ...itemProps
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps} // ...item это обжект спред оператор, разворачивает объект
            onDelete={() => onDelete(id)} //удаление сотрудника
            onAdd={() => onAdd(id)} //добавление сотрудника
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>  //получаем айди, затем аттрибут из хтмл, который привязан к полям отображения кол-ва
        ) //e.currentTarget.getAttribute - событие, элемент с событием, получение аттрибута, в аттрибуте вписаны уже конкретные функции (data-toggle атрибут из бутстрапа)
    })

    return (
        
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList