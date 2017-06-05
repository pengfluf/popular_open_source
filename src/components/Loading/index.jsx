import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './index.scss';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    const stopper = `${this.props.text}...`;
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text,
        });
      } else {
        this.setState(prevState => ({
          text: `${prevState.text}.`,
        }));
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div styleName="loading">
        {this.state.text}
      </div>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};

export default CSSModules(Loading, styles);
