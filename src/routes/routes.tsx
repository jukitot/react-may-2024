import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/UsersPage";
import ProductsPage from "../pages/ProductsPage";
import UserDetailsPage from "../pages/UserDetailsPage/UserDetailsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsPage from "../pages/PostsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path:'products', element: <ProductsPage/>},
            {path: 'users/:id', element: <UserDetailsPage/>},
            {path: 'products/:id', element: <ProductDetailsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'posts', element:<PostsPage/>}
        ]
    }
])