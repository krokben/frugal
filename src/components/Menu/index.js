import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'menu'});

export default class Menu extends Component {
  handleClick = (destination) => {
    switch(destination) {
      case 'rdiSettings':
        this.props.appActions.toggleMenu();
        !this.props.app.rdiSettings && this.props.appActions.toggleRdiSettings();
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <ul {...bem()}>
        <li {...bem('item')}>calculator</li>
      </ul>
    );
  }
}
