import React from 'react';
import {useLocation} from "react-router-dom";
import {IProduct} from "../../models/IProduct";
import styles from './productDetails.module.css'

const ProductDetailsPage = () => {
    let {state: {data}} = useLocation();
    const product: IProduct = data;
    const {
        id,
        title,
        price,
        brand,
        images,
        availabilityStatus,
        category,
        discountPercentage,
        minimumOrderQuantity,
        rating,
        sku,
        dimensions,
        reviews,
        shippingInformation,
        warrantyInformation,
        stock,
        tags,
        weight,
        returnPolicy,
        description
    } = product;
    return (
        <div className={styles.productDetails}>
            <div><h1>{title}</h1>
                <p>ID: {id} </p>
                {description}
                <p>{category}</p>
                <p>Price: {price}</p>
                <img className={styles.productImg} src={images[0]} alt={title}/>
                <p>Discount Percentage: {discountPercentage}</p>
                <p>Rating: {rating}&#9733;</p>
                <p>Stock: {stock}</p>
                <p>Tags: {tags}</p>
                <p>Brand: {brand}</p>
                <p>Sku: {sku}</p>
                <p>Weight: {weight} cm</p>
                <p>Dimensions: W: {dimensions.width} cm D: {dimensions.depth} cm H: {dimensions.height}</p>
                <p>Warranty Info: {warrantyInformation}</p>
                <p>Shipping Info: {shippingInformation}</p>
                <p>Return Policy: {returnPolicy}</p>
                <p>Minimun Order Quantity: {minimumOrderQuantity}</p>
                <p>Status: {availabilityStatus}</p></div>
            <ul>Reviews:
                {reviews.map(({rating, comment, date, reviewerName, reviewerEmail}, index) => <li key={index}>
                    <p>Rating: {rating}</p>
                    <p>{comment}</p>
                    <p>{date}</p>
                    <p>{reviewerName}</p>
                    <p>{reviewerEmail}</p>
                </li>)}</ul>
        </div>
    );
};

export default ProductDetailsPage;