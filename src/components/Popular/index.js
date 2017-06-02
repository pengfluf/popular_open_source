import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import api from './../../utils/api.js';

import PopularLangs from './../PopularLangs';
import PopularRepos from './../PopularRepos';

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
        <div>
          <PopularLangs selectedLanguage={this.state.selectedLanguage}
        onClick={this.updateLanguage}
      />
          <PopularRepos repos={this.state.repos} />
      </div>
      )
    }
}

export default CSSModules(Popular, styles);
