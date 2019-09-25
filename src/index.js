import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Login } from './containers'
import Header from './components/Header'

ReactDOM.render(
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>,
    document.getElementById('root')
)