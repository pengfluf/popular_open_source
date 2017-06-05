import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './index.scss';

const PlayerPreview = props => (
    <div className="col-12 col-sm-6" styleName="player-preview">
      <img
        styleName="image"
        src={props.avatar}
        alt={`Avatar for ${props.username}`}
      />
      <h2 styleName="username">@{props.username}</h2>
      {props.children}
    </div>
);

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default CSSModules(PlayerPreview, styles);
