import React from 'react';
import './App.css';
import './login.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Home from './home.js';
import Login from './login';

function App() {
  return (
    <div>
    <Router>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
    </Switch>
    </Router>


    </div>
  );
}

export default App;
