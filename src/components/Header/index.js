import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'header'});

export default class Header extends Component {
  render() {
    return (
      <div {...bem()}>
        <span {...bem('logo')}>frug.al</span>
        <span {...bem('trigram')} onClick={this.props.appActions.toggleMenu}>☰</span>
      </div>
    );
  }
}
