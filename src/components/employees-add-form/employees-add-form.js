import { Component } from 'react'
import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => { //фун-я сабмита нового пользователя
        e.preventDefault()
        this.props.onAdd(this.state.name, this.state.salary) //добавляем в пропсы состояния имени и з/п
        this.setState({ //состояние- пустые поля по дефолту
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit} /*добавляем в верстку функцию самбита, срабатывает на действие в форме в принципе*/> 
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} // если мы хотим компонент рендерил, контроллировал поведение в ответ на действия пользователя, нужен этот атрибут
                        onChange={this.onValueChange}
                        minLength="2"/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary} // если мы хотим компонент рендерил, контроллировал поведение в ответ на действия пользователя, нужен этот атрибут
                        onChange={this.onValueChange}
                        min="3"/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm