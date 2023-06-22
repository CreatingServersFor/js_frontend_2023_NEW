import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { todoAdd } from './actions';

class ToDoTaskAddInner extends React.Component {
  constructor(props) { 
    super(props) 

    this.state =  {
      name: '',
      description: ''
    }
    
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
  }
  
  onNameChange(e) { 
    e.preventDefault();

    this.setState({
      name: e.target.value
    });
  }

  onDescriptionChange(e) { 
    e.preventDefault();

    this.setState({
      description: e.target.value
    });
  }
  
  onAddFormSubmit(e) { 
    e.preventDefault();

      fetch((`tasks`), {
               method: 'POST', 
               body: JSON.stringify({
                 name: this.state.name, 
                 description: this.state.description
               }),
			   headers: {
				   'Content-type': 'application/json'
			   }
             }).then((res) => {
                 return res.json();
             }).then((data) => {
		this.props.dispatch(todoAdd(data._id, data.name, data.description));
		this.props.history('/');
      });
  }
  
  render() {
    return (
		<div className="card-hover-shadow-2x mb-3 card">
        <div className="card-header-tab card-header">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
		    <i className="fa fa-tasks"></i>&nbsp; Список заказываемых блюд
				</div>
            </div>
				<form onSubmit={this.onAddFormSubmit}>
				<div className="widget-content">
					<div className="widget-content-wrapper">
					
					
					
					<table border="1" bordercolor="grey" cellpadding="10">
						  <tbody>
							<tr>
							  <th colspan="3">Меню</th>
							</tr>
							<tr>
							  <th> Цена </th>
							  <th> Наименование </th>
							  <th> Наличие </th>
							</tr>
							<tr>
							  <td rowspan="2"> Салат </td>
							  <td> Цезарь </td>
							  <td>+</td>
							</tr>
							<tr>
							  <td> Крабовый </td>
							  <td>+</td>
							</tr>
							<tr>
							  <td rowspan="5">Гарнир</td>
							  <td>Картофель</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Рис с морковью</td>
							  <td>-</td>
							</tr>
							<tr>
							  <td>Рататуй</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Макароны в сметанно томатном соусе</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Тушеная картошка с луком</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td rowspan="3">Мясное блюдо</td>
							  <td>Жаркое по деревенски</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Свинина, тушеная с грибами</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Куриные рулетики с сыром</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td rowspan="3"> Десерт </td>
							  <td>Мороженое</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Печенье</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Рулет "Баунти"</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td rowspan="5">Напитки</td>
							  <td>Коктейль "Мохито"</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Лимонад</td>
							  <td>-</td>
							</tr>
							<tr>
							  <td>Фруктовый милк-шейк</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Кофе "Американо"</td>
							  <td>+</td>
							</tr>
							<tr>
							  <td>Кофе "Эспрессо"</td>
							  <td>+</td>
							</tr>
						  </tbody>
						</table>
					
					
						<input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Добавьте блюдо в список" className="form-control" />
						<input type="submit" value="Добавить" className="btn btn-info ms-2" />
					</div>
					
				</div>
				</form>
					<div className="d-block text-right card-footer">
						<NavLink to="/"  className="btn btn-info ms-2">Вернуться к списку заказов</NavLink>
						<div className="form-row">
							</div>
							<div className="forn-group col-xs-5">
							</div>
							<div className="forn-group col-xs-2">
						</div>
					</div>
			</div>
	)
  }
}

const ToDoTaskAdd = (props) => {
	return (
	  <ToDoTaskAddInner {...props} history={useNavigate()} />
	)
	
}

export default ToDoTaskAdd;