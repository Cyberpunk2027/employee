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
                {name: 'John Carter', salary: 800, increase: false, id: 1},
        
                {name: 'Alex Mercer', salary: 1000, increase: false, id: 2},
        
                {name: 'Adam Jensen', salary: 15000, increase: true, id: 3}
            ]
        }
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

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
    
    
    
            </div>
        );
    }
}

export default App;