import axios from "axios";
import {IDJResponse} from "../models/IDJResponse";
import {IUser} from "../models/IUser";
import {IProduct} from "../models/IProduct";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type" : "application/json"}
})

export const apiService = {
    users: {
        getAll: async (page: number):Promise<IDJResponse & {users: IUser[]}> => {
            let skip = (page-1) * 30;
            const {data} = await axiosInstance.get<IDJResponse & {users: IUser[]}>('/users', {
                params: {
                    skip: skip
                }
            });
            return data;
        }

    },
    products: {
        getAll: async (page: number):Promise<IDJResponse & {products: IProduct[]}> => {
            let skip = (page-1) * 30;
            const {data} = await axiosInstance.get<IDJResponse & {products: IProduct[]}>('/products', {
                params: {
                    skip: skip
                }
            });
            return data;
        }

    }
}