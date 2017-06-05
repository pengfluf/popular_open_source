import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { compare } from './../../utils/api';
import styles from './index.scss';

import Player from './../Player';
import Loading from './../Loading';

class CompareResults extends Component {
  constructor() {
    super();

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    };
  }

  componentDidMount() {
    const players = queryString.parse(this.props.location.search);

    compare([
      players.playerOneName,
      players.playerTwoName,
    ]).then((results) => {
      if (results === null) {
        return this.setState(() => ({
          error: 'Something went wrong... Please check validity of Github usernames. Also Github might forbid your requests due to exceeding request limit.',
          loading: false,
        }));
      }
      return this.setState(() => ({
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false,
      }));
    });
  }

  render() {
    const winner = this.state.winner;
    const loser = this.state.loser;
    const error = this.state.error;
    const loading = this.state.loading;

    if (loading) {
      return (
        <Loading />
      );
    }

    if (error) {
      return (
        <div>
          <p styleName="error">{error}</p>
          <Link styleName="tryagain" to="/compare">Try Again</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-12 col-sm-6">
          <Player
            label="Winner"
            score={winner.score}
            profile={winner.profile}
          />
        </div>

        <div className="col-12 col-sm-6">
          <Player
            label="Loser"
            score={loser.score}
            profile={loser.profile}
          />
        </div>
        <Link styleName="playagain" to="/compare">Play again</Link>
      </div>
    );
  }
}

export default CSSModules(CompareResults, styles);
