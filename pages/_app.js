import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppProps } from 'next/app';

import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { reducer } from '../src/client/reducers/reducer';
import { styles } from '../src/client/scss/styles.scss';

import { renderToString } from "react-dom/server";


const persistConfig = {
    key: 'root',
    storage,
}
const store = createStore(reducer, applyMiddleware(ReduxThunk));

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;