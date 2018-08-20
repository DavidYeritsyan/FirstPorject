import React, { Component } from 'react';
import List from './Tasks';
import Done from './Done';

class Todo extends Component {
    constructor(props){
        super();
        this.text = '';
        this.state = {item : [], percentage: 0, doneItems: []};
        this.enterlist = this.enterlist.bind(this);
        this.onchangefunc = this.onchangefunc.bind(this);
        this.checktodo = this.checktodo.bind(this);
    }

    checktodo(item){
        return item !== this.text;
      }
    
      enterlist = (e) => {
        e.preventDefault();
        if(this.text === '') return;
        if(!this.state.item.every(this.checktodo)) return;
        this.setState(prevState => ({
          item: prevState.item.concat(this.text)
        }));
        document.getElementById('todo').value = '';
      }
    
      onchangefunc = (e) => {
        this.text = e.target.value;
      }
    
      removeItem(item){
        const newtext = this.state.item.filter((i) => { return i !== item } );
        this.setState({item : newtext});
      }

      sendtoDone(item){
        this.removeItem(item);
        this.setState(prevState => ({
          doneItems: prevState.doneItems.concat(item)
        }));
      }
    
  render() {
    return (

      <div className='App'>
        <form>
          <input id='todo' className='grey' type='text' placeholder='Do something' onChange={this.onchangefunc}/>
          <input className='sub' type='submit' onClick={this.enterlist} value=' Save ' />
        </form>
        <List
          sendtoDone={this.sendtoDone.bind(this)}
          removeItem={this.removeItem.bind(this)}
          items={this.state.item}  
        />
        <Done items={this.state.doneItems } />
      </div>

    );
  }
}

export default Todo;