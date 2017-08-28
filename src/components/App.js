import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, deleteToDo, clearToDos } from '../actions';

import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }


  // -------- actions/index.js --------
  addToDo() {
    if(this.state.text === '' || this.state.dueDate === '') {
      alert('Please fill in the form completely.')
    }
    else {
      this.props.addToDo(this.state.text, this.state.dueDate);
      document.getElementById('main-input').value = '';
    }
  }

  deleteToDo(id) {
    this.props.deleteToDo(id);
  }
  // -------- end actions/index.js --------


  renderToDos() {
    const { todos } = this.props;

    return(
      <ul className="list-group">
      {
        todos.map(todo => {
          return(
            <li key={todo.id} className="list-group-item li-todo">

              <div className="list-item">
                <p>{todo.text}</p>
                <p><em>{moment(new Date(todo.dueDate)).fromNow()}</em></p>
              </div>

              <div 
                className="list-item btn-delete"
                onClick={ () => this.deleteToDo(todo.id) }
              >
                &#x2715;
              </div>

            </li>
          );
        })
      }
      
     
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <h3>What you have to do?</h3>

        <div className="form todo-form">
          <div className="form-group">
            <input 
              id="main-input"
              className="form-control input-style"
              placeholder="I have to..."
              onChange={ event => this.setState({ text: event.target.value })}
              onKeyPress = {
                event => {
                  if(event.key === 'Enter') {
                    this.addToDo();
                  }
                }
              }
            />
            <h3>and when? </h3>    
            <input
              className="form-control input-style"
              type="datetime-local"
              onChange = { event => this.setState({ dueDate: event.target.value })}
            />
          </div>

          <button
            className="btn-add"
            onClick={ () => this.addToDo() }
          >
            +
          </button>
          </div>

          <section className="render-todos">
            { this.renderToDos() }
          </section>

          <button
            className="btn btn-danger"
            onClick={ () => this.props.clearToDos() }
          >
            CLEAR ALL
          </button>
        
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    todos: state
  }
}


export default connect(mapStateToProps, {addToDo, deleteToDo, clearToDos})(App);
