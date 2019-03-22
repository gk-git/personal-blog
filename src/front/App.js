import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/blog" component={Blog} />
  </Switch>
);

export default App;
