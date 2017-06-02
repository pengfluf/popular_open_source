import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

import Popular from './../Popular';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="app">
        <Popular />
      </div>
    );
  }
}

export default CSSModules(App, styles);
