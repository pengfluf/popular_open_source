import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './index.scss';

import PlayerProfile from './../PlayerProfile';

const Player = props => (
  <div styleName="player">
    <div styleName="player-status">{props.label}</div>
    <div styleName="player-score">Score: {props.score}</div>
    <PlayerProfile
      info={props.profile}
    />
  </div>
);

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default CSSModules(Player, styles);
