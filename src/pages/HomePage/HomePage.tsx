import React from 'react';
import styles from './homePage.module.css'

const HomePage = () => {
    return (
        <div className={styles.block}>
            <h1>↑</h1>
            <br/>
            <h1 className={styles.text}>You can choose Users or Products tab</h1>
        </div>
    );
};

export default HomePage;