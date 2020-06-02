import React from 'react';
import { render } from 'react-dom';
import styles from './scss/styles.scss';
import App from './components/App/';

render(
    <App info='React Test App, PartI'/>,
    document.getElementById('root')
);