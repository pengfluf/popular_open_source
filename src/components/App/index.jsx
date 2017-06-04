import React from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './index.scss';

import Nav from './../Nav';
import Home from './../Home';
import Compare from './../Compare';
import CompareResults from './../CompareResults';
import Popular from './../Popular';

const App = () => (
  <BrowserRouter>
    <div styleName="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/compare" component={Compare} />
        <Route path="/compare/results" component={CompareResults} />
        <Route path="/popular" component={Popular} />
        <Route render={() =>
          <p>Not found</p>
        }
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default CSSModules(App, styles);
