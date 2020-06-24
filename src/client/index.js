import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import styles from './scss/styles.scss';
import App from './components/App/';
import { reducer } from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

render(
    <Provider store={store}>
        <App info='React Test App, PartI'/>
    </Provider>,
    document.getElementById('root')
);