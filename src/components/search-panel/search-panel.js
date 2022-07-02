import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state={
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value //переменная получается из неких введенных данных
        this.setState({term}) //устанавливаем локального состояния
        this.props.onUpdateSearch(term) //пробрасываем изменения наверх, в app.js
    }

    render() {
        return(
            <input type="text" 
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel