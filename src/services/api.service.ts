import axios from "axios";
import {BaseResponseType} from "../models/BaseResponseType";
import {IProduct} from "../models/IProduct";
import Product from "../components/product/Product";

const axiosInstance =  axios.create({
    baseURL: 'https://dummyjson.com'
});
export const getProducts = async ():Promise<IProduct[]> => {
let {data: {products}} = await axiosInstance.get<BaseResponseType & {products: IProduct[]}>('/products');
return products;
}

export const getProduct = async (id:string):Promise<IProduct> => {
    // let {data} = await axiosInstance.get<IProduct>('/product/' + id)
    // return data

    return (await axiosInstance.get<IProduct>('/product/' + id)).data;
}