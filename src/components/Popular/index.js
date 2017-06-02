import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

import PopularLangs from './../PopularLangs'

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    })
  }

    render() {
      return (
        <PopularLangs selectedLanguage={this.state.selectedLanguage}
        onClick={this.updateLanguage}
      />
      )
    }
}

export default CSSModules(Popular, styles);
