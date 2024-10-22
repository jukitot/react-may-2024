import axios from "axios";
import {IPost} from "../models/IPost";

const axiosResponse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {"Content-Type": "application/json"}
})

export const createPost = async (postData: IPost): Promise<IPost> => {
    const {data} = await axiosResponse.post<IPost>('/posts', postData)
    return data
}