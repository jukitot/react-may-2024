import React, {useEffect, useState} from 'react';
import {loadAuthProducts, refresh} from "../services/api.service";
import {IProduct} from "../models/IProduct";
import {Simulate} from "react-dom/test-utils";
import loadStart = Simulate.loadStart;

const AuthResourcesPage = () => {
    const [products, setProducts] = useState<IProduct[]>()
    useEffect(() => {
        loadAuthProducts().then(products => {
           if(products) {
               setProducts(prevState => {
                   return products
               })
           }
        })
            .catch(reason => {
                refresh().then()
            })
        return()=>{
            console.log('useEffect done')
        }


    }, []);
    return (
        <div>
            {
                JSON.stringify(products)
            }
        </div>
    );
};

export default AuthResourcesPage;