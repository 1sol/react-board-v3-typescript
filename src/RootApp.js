import React from 'react';
import { browserHistory } from 'react-router';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Container Components
import { Home, App, Login, Detail } from './pages';

class RootApp extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/detail" component={Detail}>
            <Route path="/detail/:name?" component={Detail}/>
          </Route>
        </div>
      </Router>
    );
  }
}
module.hot.accept();

export default RootApp;