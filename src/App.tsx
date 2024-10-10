import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {IUser} from "./models/IUser";
import Posts from "./components/Posts/Posts";
import {IPost} from "./models/IPost";
import {getPosts} from "./services/api.service";


const App: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    const lift = (user: IUser) =>{
        getPosts(user)
            .then((response:IPost[]) => {
                setPosts(response)
            })
    }

    return (
        <>
            <Posts posts={posts}/>
            <Users lift={lift}/>
        </>
    );
}

export default App;
