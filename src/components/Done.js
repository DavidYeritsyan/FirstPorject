import React, { Component } from 'react';

class Done extends Component {
    constructor(props){
        super();
        this.id = 1;
    }
    
  render() {
    return (

      <div className='Done'>
            <h4>Done List</h4>
            <ol>
                {
                    this.props.items.map(item => (
                        <li key={ this.id++ } >
                            { item }
                        </li>
                      ))
                }
            </ol>
      </div>

    );
  }
}

export default Done;