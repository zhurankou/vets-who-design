import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import About from './About';
import Stories from './Stories';

import './index.css';


import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

const AllRoutes = () => (
  <Router basename='/'>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/stories" component={Stories}/>
    </div>
  </Router>
)

ReactDOM.render(
  <AllRoutes />,
  document.getElementById('root')
);
