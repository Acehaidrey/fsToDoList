import React, {Component} from 'react';
import Actions from '../Actions';

export default class Item extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      check: this.props.check,
      text: this.props.text,
      display: true
    }
  }

  _checkedChange = (event) => {
    console.log("checked: " + event.target.checked);
    this.setState({
      check: event.target.checked
    });
    Actions.updateToDo(this.props._id, event.target.checked, this.state.text);
  };

  _delItem = () => {
    Actions.delToDo(this.props._id);
  };

  _textChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  _euClick = () => {
    this.setState({
      display: !this.state.display
    });
  };

  _saveClick = () => {
    Actions.updateToDo(this.props._id, this.state.check, this.state.text);
    this.setState({
      display: true
    });
  };

  render() {
    return (
      <div>
        <input type='checkbox' checked={this.state.check} onChange={this._checkedChange} />
        <span className={this.state.display ? '' : 'notDisplay'}>
          <p> {this.state.text} </p> 
          <button onClick={this._euClick}> Edit </button>
          <button onClick={this._delItem}> Delete </button>
        </span>
        <span className={!this.state.display ? '' : 'notDisplay'}>
          <input type='textbox' value={this.state.text} onChange={this._textChange} />
          <button onClick={this._euClick}> Undo </button>
          <button onClick={this._saveClick}> Save </button>
        </span>
      </div>
    );
  }
}

