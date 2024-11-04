import React, {memo, useEffect} from 'react';
type MenuTypes = {
    id: number;
    someFn:()=>void;
    links: string[]
}
const Menu = memo(({id, someFn, links}:MenuTypes) => {

        console.log('menu build')

    return (
        <div>
            this is menu component {id}
            <ul>
            {links.map(link => (<li>{link}</li>))}
            </ul>
        </div>
    );
});

export default Menu;