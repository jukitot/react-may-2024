import React from 'react';
import styles from './menu.module.css'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>

                <li>
                    <Link to={'/users'}> Users </Link>
                </li>
                <li>
                    <Link to={'/posts'}> Posts </Link>
                </li>
                <li>
                    <Link to={'/comments'}> Comments </Link>
                </li>

            </ul>
        </div>
    );
};

export default Menu;