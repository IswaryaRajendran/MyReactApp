import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';
import Login from './components/Login';

const BasicExample = () => (
  <Router>
    <div>

      <ul>
      <li><Link to="/">Login</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
export default BasicExample;
