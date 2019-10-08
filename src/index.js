import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

import RootApp from './RootApp'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<RootApp />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();