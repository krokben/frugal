import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './App.css';

const bem = new BEMHelper({name: 'app'});

class App extends Component {
  render() {
    return (
      <div {...bem()}>
      </div>
    );
  }
}

export default App;
