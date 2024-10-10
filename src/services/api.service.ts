import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})

export const getUsers = async (): Promise<IUser[]> => {
    let response = await axiosInstance.get<{ users: IUser[] }>('/users')
    return response.data.users;
}

export const getPosts = async (user: IUser) => {
    let response = await axiosInstance.get<{ posts: IPost[] }>('/posts/user/' + user.id)
    return response.data.posts;
}
