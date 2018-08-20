import React, { Component } from 'react';

class Tasks extends Component {
    constructor(props){
        super();
        this.id = 1;
    }
    
  render() {
    return (

      <div className='AppforTodo'>
        <h4>To Do List</h4>
            <ol>
                {
                    this.props.items.map(item => (
                        <li key={ this.id++ } >
                            <button className='btn-del' onClick={this.props.removeItem.bind(null, item)} > Delete </button>
                            <button className='btn-done' onClick={this.props.sendtoDone.bind(null, item)} > Done </button>    
                            { item }
                        </li>
                      ))
                }
            </ol>
      </div>

    );
  }
}

export default Tasks;