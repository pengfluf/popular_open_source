import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const Home = () => (
  <div styleName="home">
    <h1 styleName="title">Find out which of your favorite repositories on Github is cooler!</h1>

    <Link styleName="button" to="/compare">
      Try it!
    </Link>

    <Link styleName="link" to="/popular">
      ...or just check out most popular repositories on Github
    </Link>
  </div>
);

export default CSSModules(Home, styles);
