import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import PropTypes from 'prop-types';

class PopularRepos extends Component {

  render() {
    const repos = this.props.repos;

    if (repos) {
      return (
        <ul styleName="repositories" className="row justify-content-center">
            {
              repos.map( (repo, index) => {
                return (
                  <li className="col-2"
                    key={repo.id}>
                    <div styleName="repo">
                       <div styleName="repo-index"># {index + 1}</div>
                       <a href={repo.html_url}>
                         <img styleName="repo-img" src={repo.owner.avatar_url} alt={repo.name}/>
                       </a>
                       <a styleName="repo-link"
                         href={repo.html_url}>{repo.name}</a>
                       <div
                         styleName="repo-stars">{repo.stargazers_count} stars</div>
                    </div>
                   </li>
                )
              })
            }
        </ul>
      )
    }

  }
}

export default CSSModules(PopularRepos, styles);
