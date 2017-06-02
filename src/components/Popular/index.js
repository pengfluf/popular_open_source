import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

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
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <div>
        <div styleName="popular">
          <ul styleName="languages">
          {languages.map((lang) => {
            return (
              <li
                key={lang}
                onClick={this.updateLanguage.bind(null, lang)}
                styleName="language-wrapper">
                <a styleName={lang === this.state.selectedLanguage ? `language-active` : `language`} href="#">{lang}</a>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CSSModules(Popular, styles);
