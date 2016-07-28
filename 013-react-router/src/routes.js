import React from 'react';
import {Route ,IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Hello from './components/Hello';


export default (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/hello" component={Hello} />
    <IndexRoute component={Home} />
  </Route>
)
