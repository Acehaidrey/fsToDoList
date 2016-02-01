import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {

  render() {
    return (
      <h4> Hello World </h4>
    );
  }

}

ReactDom.render(<App />, document.getElementById('container'));
