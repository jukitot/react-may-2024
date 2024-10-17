
import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getUsers = async():Promise<IUser[]> =>{
    let {data} = await axiosInstance.get<IUser[]>('/users')
    return data
}

export const getPosts = async():Promise<IPost[]> =>{
    let {data} = await axiosInstance.get<IPost[]>('/posts')
    return data
}

export const getComments = async():Promise<IComment[]> =>{
    let {data} = await axiosInstance.get<IComment[]>('/comments')
    return data
}