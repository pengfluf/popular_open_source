import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './index.scss';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState(() => ({
      username: value,
    }),
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username,
    );
  }

  render() {
    return (
      <div className="col-12 col-sm-6">
        <form styleName="form" onSubmit={this.handleSubmit}>
          <label styleName="label" htmlFor="username">
            {this.props.label}
          </label>
          <input
            styleName="input"
            id="username"
            placeholder="github username"
            type="text"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            styleName="submit"
            type="submit"
            disabled={!this.state.username}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CSSModules(PlayerInput, styles);
