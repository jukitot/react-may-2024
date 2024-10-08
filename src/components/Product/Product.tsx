import React, {FC} from 'react';
import {IProductModel} from "../../models/IProductModel";
import './Product.css'

const Product: FC<IProductModel> = ({
                                        id,
                                        title,
                                        description,
                                        category,
                                        price,
                                        discountPercentage,
                                        rating,
                                        stock,
                                        tags,
                                        brand,
                                        sku,
                                        weight,
                                        dimensions,
                                        warrantyInformation,
                                        shippingInformation,
                                        availabilityStatus,
                                        reviews,
                                        returnPolicy,
                                        minimumOrderQuantity,
                                        meta,
                                        images
                                    }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>ID: {id} </p>
            {description}
            <p>{category}</p>
            <p>Price: {price}</p>
            <img className={'img'} src={images[0]} alt={title}/>
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
            <p>Status: {availabilityStatus}</p>
            <div>Reviews:
                {reviews.map(({rating, comment, date, reviewerName, reviewerEmail}) => <li><p>Rating: {rating}</p>
                    <p>{comment}</p>
                    <p>{date}</p>
                    <p>{reviewerName}</p>
                    <p>{reviewerEmail}</p>
                </li>)}</div>


        </>
    );
};

export default Product;