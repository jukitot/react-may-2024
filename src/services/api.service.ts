import axios from "axios";
import {IDJResponse} from "../models/IDJResponse";
import {IUser} from "../models/IUser";
import {IProduct} from "../models/IProduct";
import {IComment} from "../models/IComment";
import {IPost} from "../models/IPost";

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

    },
    comments: {
        getAll: async (page: number):Promise<IDJResponse & {comments: IComment[]}> => {
            let skip = (page-1) * 30;
            const {data} = await axiosInstance.get<IDJResponse & {comments: IComment[]}>('/comments', {
                params: {
                    skip: skip
                }
            });
            return data;
        }

    },
    posts: {
        getAll: async (page: number):Promise<IDJResponse & {posts: IPost[]}> => {
            let skip = (page-1) * 30;
            const {data} = await axiosInstance.get<IDJResponse & {posts: IPost[]}>('/posts', {
                params: {
                    skip: skip
                }
            });
            return data;
        },
        getComments: async (postId: number):Promise<IDJResponse & {comments: IComment[]}> => {
            const {data} = await axiosInstance.get<IDJResponse & {comments: IComment[]}>(`/posts/${postId}/comments`);
            return data;
        },

    }
}