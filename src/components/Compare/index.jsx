import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import styles from './index.scss';

import PlayerInput from './../PlayerInput';
import PlayerPreview from './../PlayerPreview';

class Compare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
      return newState;
    });
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = '';
      newState[`${id}Image`] = null;
      return newState;
    });
  }

  render() {
    const match = this.props.match;
    const playerOneName = this.state.playerOneName;
    const playerTwoName = this.state.playerTwoName;
    const playerOneImage = this.state.playerOneImage;
    const playerTwoImage = this.state.playerTwoImage;

    return (
      <div styleName="compare">
        <h1 styleName="title">Who's cooler? Find out!</h1>
        <div className="row">
          <div className="col-6">
        {
          !playerOneName &&
          <PlayerInput
            id="playerOne"
            label="Player One"
            onSubmit={this.handleSubmit}
          />
        }

        {
          playerOneImage !== null &&
          <PlayerPreview
            avatar={playerOneImage}
            username={playerOneName}
          >
            <button
              styleName="reset"
              onClick={this.handleReset.bind(null, 'playerOne')}>
              Reset
            </button>
          </PlayerPreview>
        }
        </div>

          <div className="col-6">
        {
          !playerTwoName &&
          <PlayerInput
            id="playerTwo"
            label="Player Two"
            onSubmit={this.handleSubmit}
          />
        }

        {
          playerTwoImage !== null &&
          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
          >
            <button
              styleName="reset"
              onClick={this.handleReset.bind(null, 'playerTwo')}>
              Reset
            </button>
          </PlayerPreview>
        }
          </div>
        </div>

        {
          playerOneImage && playerTwoImage &&
          <Link styleName="findout"
            to={{
            pathname: `${match.url}/results`,
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
          }}
          >
            Find out!
          </Link>
        }
      </div>
    );
  }
}

export default CSSModules(Compare, styles);
