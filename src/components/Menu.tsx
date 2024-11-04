import React, {memo, useEffect} from 'react';
type MenuTypes = {
    id: number;
    someFn:()=>void
}
const Menu = memo(({id, someFn}:MenuTypes) => {

        console.log('menu build')

    return (
        <div>
            this is menu component {id}
        </div>
    );
});

export default Menu;