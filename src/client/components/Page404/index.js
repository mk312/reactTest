import styles from './Page404.module.scss';
import React from 'react';
import Link from 'next/link';

const Page404 = (props) => (
    <div className={styles.wrapper}>
        <p className={styles.text}>Looks like this page doesn't exist. Wrong link or got deleted...</p>
        <a className={styles.link} href='/'>
            GO TO THE MAIN PAGE
        </a>
    </div>
)

export default Page404;