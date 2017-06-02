import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import PropTypes from 'prop-types';

import languages from './../../data/languages.js';

class PopularLangs extends Component {
  render() {
    return (
      <div styleName="popular-langs">
        <ul styleName="languages">
        {languages.map((lang) => {
          return (
            <li
              key={lang}
              onClick={this.props.onClick.bind(null, lang)}
              styleName="language-wrapper">
              <a styleName={lang === this.props.selectedLanguage ? `language-active` : `language`} href="#">{lang}</a>
            </li>
          )
        })}
        </ul>
    </div>
    )
  }
}

PopularLangs.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CSSModules(PopularLangs, styles);
