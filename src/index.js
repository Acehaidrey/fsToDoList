import React, {Component} from 'react';
import ReactDom from 'react-dom';
import AddToList from './Components/add-to-list.react';
import List from './Components/list.react';
import Actions from './Actions';

class App extends Component {

  _clearCollection = () => {
    console.log('clear');
    Actions.clear();
  };

  render() {
    return (
      <div>
        <AddToList />
        <hr />
        <List />
        <hr />
        <button onClick={this._clearCollection}> Finish </button>
      </div>
    );
  }

}

ReactDom.render(<App />, document.getElementById('container'));
