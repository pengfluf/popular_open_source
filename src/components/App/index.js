import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div styleName="app">Hello!</div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
