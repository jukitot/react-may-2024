import React, {memo, useEffect} from 'react';

const Menu = memo(({id}:{id: number}) => {
    useEffect(() => {
        console.log('menu build')
    }, []);
    return (
        <div>
            this is menu component {id}
        </div>
    );
});

export default Menu;