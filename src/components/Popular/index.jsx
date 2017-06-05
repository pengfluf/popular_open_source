import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import { fetchPopularRepos } from './../../utils/api';

import PopularLangs from './../PopularLangs';
import PopularRepos from './../PopularRepos';
import Loading from './../Loading';

class Popular extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(() => ({
      selectedLanguage: lang,
      repos: null,
    }));

    fetchPopularRepos(lang)
      .then((repos) => {
        this.setState(() =>
          ({
            repos,
          }),
        );
      });
  }


  render() {
    return (
      <div>
        <PopularLangs
          selectedLanguage={this.state.selectedLanguage}
          onClick={this.updateLanguage}
        />
        {
          !this.state.repos
          ? <Loading />
          : <PopularRepos repos={this.state.repos} />
      }
      </div>
    );
  }
}

export default CSSModules(Popular, styles);
