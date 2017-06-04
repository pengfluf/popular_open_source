import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './index.scss';

const PlayerPreview = props => (
  <div>
    <img
      src={props.avatar}
      alt={`Avatar for ${props.username}`}
    />
    <h2>@{props.username}</h2>
    <button
      onClick={props.onReset.bind(null, props.id)}>
      Reset
    </button>
  </div>
);

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};


export default CSSModules(PlayerPreview, styles);
