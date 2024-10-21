import React, {FC} from 'react';
import {IProduct} from "../../models/IProduct";
import {Link} from "react-router-dom";
import styles from './product.module.css'

type ProductProps = {
    product: IProduct;
}
const Product: FC<ProductProps> = ({product}) => {
    const {id, title, brand, category, price, images} = product;
    return (
        <div className={styles.productBlock}>
            <h3>ID: {id}</h3>
            <h4>{title}</h4>
            <h5>{brand}</h5>
            <p>{category}</p>
            <p><b>Price: </b>{price} $</p>
            <img className={styles.productImg} src={images[0]} alt=""/>
            <br/>
            <Link state={{data: product}} to={product.id.toString()}>
                <button className={styles.productButton}>More info</button>
            </Link>
        </div>
    );
};

export default Product;