import React, {useEffect, useState} from 'react';
import Products from "../components/Products/Products";
import PaginationComponent from "../components/Pagination/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import {IProduct} from "../models/IProduct";
import {apiService} from "../services/api.service";

const ProductsPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const [products, setProducts] = useState<IProduct[]>([])

    const [flag, setFlag] = useState<boolean>(false)

    useEffect(() => {
        const page = query.get('page')
        if (page) {
            apiService.products
                .getAll(+page)
                .then(value => {
                    setProducts(value.products)
                    const lastId = value.products[value.products.length - 1].id;
                    if (lastId >= value.total) {
                        setFlag(true)
                    } else {
                        setFlag(false)
                    }
                })
        }
    }, [query]);
    return (
        <div>
            <Products products={products}/>
            <PaginationComponent flag={flag}/>
        </div>
    );
};

export default ProductsPage;