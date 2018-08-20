import React, { Component } from 'react';
import './App.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Todolist from './components/Todo';

class App extends Component {

  constructor(){
    super();
    this.state = {item : [], percentage: 0};
  }

  componentDidMount(){
    this.intervalForLoading = setInterval(() => {
      this.setState({percentage: this.state.percentage+1});
      if (this.state.percentage >= 100) {
          clearInterval(this.intervalForLoading);
      }
    }, 100);
  }

  render() {
    return (

      <div className='App'>

        {
          this.state.percentage < 100 ? <CircularProgressbar className='small' percentage={this.state.percentage} text={`${this.state.percentage}%`} />  :  <Todolist />
        }

      </div>

    );
  }

}

export default App;
