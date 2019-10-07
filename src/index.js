import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Container Components
import { Home, App, Login, Detail } from './pages';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
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
    </Provider>
    , document.getElementById('root')
);

module.hot.accept();
