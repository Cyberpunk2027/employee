import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        data: [
                {name: 'John Carter', salary: 800, increase: false, star: true, id: 1},
        
                {name: 'Alex Mercer', salary: 1000, increase: false, star: false, id: 2},
        
                {name: 'Adam Jensen', salary: 15000, increase: true, star: false, id: 3}
            ],
        
        }
        this.maxId = 4;
        
    }
    
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); //findIndex возвращает индекс в массиве, если элемент удовлетворяет требование условия
            console.log(index)
            // const before = data.slice(0, index) //Метод slice() возвращает новый массив, содержащий копию части исходного массива
            // const after = data.slice(index + 1)
            // const newArr = [...before, ...after] // Синтаксис ES6, разворачиваем в массиве методы через ...
            
            return{
                // data: newArr //в дату возвращается новый массив
                data: data.filter(item => item.id !== id) //Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
            } // если айтем ид не равен ид то он удаляется
        })
    }

    addItem = (name, salary) => {
        const newItem = { // создаём переменную с пустыми значениями
            name,
            salary,
            increase: false,
            star: false,
            id: this.maxId++ //инкремент айдишника
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem] //новый массив с данными из data + новый массив

            return{
                data: newArr //передаем в дату новый массив 
            }
        })

        
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => { // map создает новый массив через коллбэк фун-ю внутри
                if(item.id === id) { //затем идет перебор объектов в массиве data и если находим нужный объект
                    return{...item, increase: !item.increase} //то он вернет новый объект, а не старый, в котором increase поменялся на противоположный
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => { // map создает новый массив через коллбэк фун-ю внутри
                if(item.id === id) { //затем идет перебор объектов в массиве data и если находим нужный объект
                    return{...item, star: !item.star} //то он вернет новый объект, а не старый, в котором increase поменялся на противоположный
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length //получение айтемов где положительное значение increase
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd={this.addItem}/>
    
    
    
            </div>
        );
    }
}

export default App;