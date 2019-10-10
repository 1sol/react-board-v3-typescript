import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';

import RootApp from './RootApp'
import * as serviceWorker from './serviceWorker';

import store from './stores';

ReactDOM.render(
	<Provider store={store}>
		<RootApp />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();