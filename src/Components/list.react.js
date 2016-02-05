import React, {Component} from 'react';
import {listenTo} from 'reflux';
import reactMixin from 'react-mixin';

import ToDoStore from '../Stores/todo-store';
import Actions from '../Actions';
import Item from './item.react';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listItem: []
    };
    Actions.getToDo(); 
  }

  _onChange = (event, list) => {
    console.log(list);
    this.setState({
      listItem: list
    });
    console.log(Array.isArray(list));
  };

  render() {
    return (
      <div>
        {this.state.listItem.map((item, id)=> <Item key={id} {...item}/>)}
      </div>
    );
  }
}

reactMixin(List.prototype, listenTo(ToDoStore, '_onChange'));

