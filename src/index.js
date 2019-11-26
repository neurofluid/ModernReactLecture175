import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // allows middleware to be hooked in (thunk below)
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store, applyMiddleware(thunk)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
