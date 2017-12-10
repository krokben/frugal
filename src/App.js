import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appActions from './actions/appActions';
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

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
