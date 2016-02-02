import React, {Component} from 'react';
import ReactDom from 'react-dom';
import AddToList from './Components/add-to-list.react'

class App extends Component {

  render() {
    return (
      <div>
        <AddToList />
      </div>
    );
  }

}

ReactDom.render(<App />, document.getElementById('container'));
