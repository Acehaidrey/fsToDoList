import React, {Component} from 'react';

import Actions from '../Actions';
import toDoStore from '../Stores/todo-store';


export default class AddToList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  _updateText = (event) => {
    this.setState({
      text: event.target.value
    });
  };
  // arrow vs bind: arrow takes care of binding to this

  _handleClick = () => {
    console.log(this.state.text + " tst");
    Actions.addToDo(this.state.text);
    // Actions.getToDo();
    this.setState ({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <input type='text' placeholder='Add a todo' value={this.state.text} onChange={this._updateText} /> <br/>
        <button type='submit' onClick={this._handleClick}> Add </button>
      </div>
    );
  }

}

