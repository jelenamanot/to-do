import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, deleteToDo } from '../actions';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }


  // -------- actions/index.js --------
  addToDo() {
    if(this.state.text === '') {
      alert('Please fill in the form completely.')
    }
    else {
      this.props.addToDo(this.state.text);
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
                {todo.text}
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
          </div>

          <button
            className="btn-add"
            onClick={ () => this.addToDo() }
          >
            +
          </button>

          <section className="render-todos">
            { this.renderToDos() }
          </section>
        </div>


      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    todos: state
  }
}


export default connect(mapStateToProps, {addToDo, deleteToDo})(App);
