import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ToDoPage from "../pages/ToDoPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
            {index: true, element: <HomePage/>},
            {path: 'todos', element: <ToDoPage/>}
        ]
    }
])