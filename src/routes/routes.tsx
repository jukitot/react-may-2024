import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorLayout from "../layouts/ErrorLayout";
import RecipesPage from "../pages/RecipesPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'products', element: <ProductsPage/>},
            {path: 'products/:id', element: <ProductDetailsPage/>},
            {path: 'recipes', element: <RecipesPage/>},

        ],
        errorElement : <ErrorLayout/>
    },


]);