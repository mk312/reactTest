import React from 'react';
import { render } from 'react-dom';
import styles from './scss/styles.scss';
import App from './components/App/App.jsx';

render(
    <App info='React Test App, PartI'/>,
    document.getElementById('root')
);