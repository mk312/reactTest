import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Page404 = (props) => (
  <div className={styles.wrapper}>
    <p className={styles.text}>Looks like this page doesn't exist. Wrong link or got deleted...</p>
    <Link to={'/'} className={styles.link}>
            GO TO THE MAIN PAGE
    </Link>
  </div>
);

export default Page404;
