import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './index.scss';

const PlayerPreview = props => (
    <div styleName="player-preview">
      <a styleName="image-link" href={`https://github.com/${props.username}`}>
        <img
          styleName="image"
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
        />
      </a>
      <a styleName="username-link" href={`https://github.com/${props.username}`}>@{props.username}</a>
      {props.children}
    </div>
);

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default CSSModules(PlayerPreview, styles);
