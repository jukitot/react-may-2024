import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoadUsersPage from "./pages/LoadUsersPage";
import ShowUsersPage from "./pages/ShowUsersPage";
import ShowPostsPage from "./pages/ShowPostsPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
    {path: '/', element: <App/>, children:[
            {path:'users', element:<LoadUsersPage/>},
            {path:'show', element:<ShowUsersPage/>},
            {path: 'posts', element: <ShowPostsPage/>}
        ]}
])
root.render(
    <RouterProvider router={routes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

