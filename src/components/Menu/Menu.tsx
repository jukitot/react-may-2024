import React from 'react';
import {Link} from "react-router-dom";
import styles from './menu.module.css'

const Menu = () => {
    return (
        <div className={styles.menuBg}>
            <ul className={styles.menu}>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'users'}>USERS</Link></li>
                <li><Link to={'products'}>PRODUCTS</Link></li>
                <li><Link to={'comments'}>COMMENTS</Link></li>
                <li><Link to={'posts'}>POSTS</Link></li>
            </ul>
        </div>
    );
};

export default Menu;