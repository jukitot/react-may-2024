import React, {useContext, useEffect} from 'react';
import {MyContext} from "../MyContexProvider";

const UsersPage = () => {
    const context = useContext(MyContext)

    return (
        <div>
            {context.userSlice.allUsers.map((user)=>(<div>{user.firstName}</div>))}
        </div>
    );
};

export default UsersPage;