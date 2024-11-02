import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'/login'}>LOGIN</Link></li>
                <li><Link to={'/auth/resources'}>RESOURCES</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;