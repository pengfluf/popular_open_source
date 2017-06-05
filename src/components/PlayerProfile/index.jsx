import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './index.scss';

import PlayerPreview from './../PlayerPreview';

const PlayerProfile = (props) => {
  const info = props.info;
  return (
    <PlayerPreview
      avatar={info.avatar_url}
      username={info.login}
    >
      <ul>
        {<li styleName="profile-item">{info.name}</li>}
        {info.location ? <li styleName="profile-item">{info.location}</li> : null}
        {info.company ? <li styleName="profile-item">Company: {info.company}</li> : null}
        {<li styleName="profile-item">Followers: {info.followers}</li>}
        {<li styleName="profile-item">Following: {info.following}</li>}
        {info.public_repos ? <li styleName="profile-item">Public Repositories: {info.public_repos}</li> : null}
        {info.blog ? <li styleName="profile-item">
          <a styleName="profile-link" href={info.blog}>{info.blog}</a>
        </li> : null}
      </ul>
    </PlayerPreview>
  );
};

PlayerProfile.propTypes = {
  info: PropTypes.object.isRequired,
};

export default CSSModules(PlayerProfile, styles);
