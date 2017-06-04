import React from 'react';
import CSSModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';
import styles from './index.scss';

const Nav = () => (
  <nav>
    <ul styleName="main-nav">
      <li>
        <NavLink exact activeClassName="main-nav__item--active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="main-nav__item--active" to="/compare">
        Compare
      </NavLink>
      </li>
      <li>
        <NavLink activeClassName="main-nav__item--active" to="/popular">
        Popular
      </NavLink>
      </li>
    </ul>
  </nav>
);

export default CSSModules(Nav, styles);
