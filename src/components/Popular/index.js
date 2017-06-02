import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import api from './../../utils/api.js';

import PopularLangs from './../PopularLangs';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    })

    api.fetchPopularRepos(lang)
      .then( (repos) => {
        this.setState( () => {
          return {
            repos: repos
          }
        })
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
