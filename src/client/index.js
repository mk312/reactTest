import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import styles from './scss/styles.scss';
import App from './components/App/';
import { reducer } from './reducers/reducer';

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk))
let persistor = persistStore(store);

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App info='React Test App, PartI'/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);