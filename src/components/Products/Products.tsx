import React, {FC} from 'react';
import {IProduct} from "../../models/IProduct";
import Product from "../Product/Product";
import styles from './products.module.css'

type ProductsProps = {
    products: IProduct[];
}
const Products: FC<ProductsProps> = ({products}) => {
    return (
        <div className={styles.productsBlock}>
            {products.map(product => (<Product product={product} key={product.id}/>))}
        </div>
    );
};

export default Products;