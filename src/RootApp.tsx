import React from 'react';

// Router
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Container Components
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';

class RootApp extends React.Component<{}> {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/detail" component={Detail}>
            <Route path="/detail/:name?" component={Detail}/>
          </Route>

          <Redirect from="/" to="/login"></Redirect>
        </div>
      </BrowserRouter>
    );
  }
}

export default RootApp;