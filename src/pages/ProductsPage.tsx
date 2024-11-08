import React, {useEffect, useState} from 'react';
import Products from "../components/Products/Products";
import PaginationComponent from "../components/Pagination/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {loadProducts} from "../redux/slices/ProductSlice";

const ProductsPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    let {products} = useAppSelector(store => store.productSlice);
    let dispatch = useAppDispatch();

    const [flag, setFlag] = useState<boolean>(false)

    useEffect(() => {
        const page = query.get('page')
        if (page) {
            apiService.products
                .getAll(+page)
                .then(value => {
                    dispatch(loadProducts(value.products))
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