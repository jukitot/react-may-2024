import React from 'react';
import Products from "../components/products/Products";
import {Outlet} from "react-router-dom";

const ProductsPage = () => {
    return (
        <div>
            <Products/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default ProductsPage;