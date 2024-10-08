import React, {useEffect, useState} from 'react';
import {IProductModel} from "../../models/IProductModel";
import Product from "../Product/Product";
import '../Product/Product.css'


const Products = () => {
    const [products, setProducts] = useState<IProductModel[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(
                value => {
                    setProducts(value.products)
                });
    }, [])

    return (
        <div className={'flex'}>
            <ul className={'no-style-list flex'}>
                {
                    products.map(({
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
                                  }: IProductModel) => <li className={'w45'}>
                        <Product id={id}
                                 title={title}
                                 description={description}
                                 category={category}
                                 price={price}
                                 discountPercentage={discountPercentage}
                                 rating={rating}
                                 stock={stock}
                                 tags={tags}
                                 brand={brand}
                                 sku={sku}
                                 weight={weight}
                                 dimensions={dimensions}
                                 warrantyInformation={warrantyInformation}
                                 shippingInformation={shippingInformation}
                                 availabilityStatus={availabilityStatus}
                                 reviews={reviews}
                                 returnPolicy={returnPolicy}
                                 minimumOrderQuantity={minimumOrderQuantity}
                                 meta={meta}
                                 images={images}
                        /></li>)
                }
            </ul>
        </div>
    );
};

export default Products;