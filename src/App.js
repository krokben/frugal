import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appActions from './actions/appActions';
import BEMHelper from 'react-bem-helper';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

const bem = new BEMHelper({name: 'app'});

class App extends Component {
  render() {
    return (
      <div {...bem()}>
        <Header appActions={this.props.appActions} />
        {this.props.app.menu && <Menu app={this.props.app} appActions={this.props.appActions} />}
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
