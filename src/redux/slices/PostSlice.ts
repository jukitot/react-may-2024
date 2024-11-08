import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost";

type PostSliceType = {
    posts: IPost[];
    post: IPost|null;
}

const postInitState:PostSliceType = {
    posts: [],
    post: null
}

export let postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers:{
        loadPosts: (state, action:PayloadAction<IPost[]>) =>{
            state.posts = action.payload
        },
        loadPost: (state, action:PayloadAction<IPost>) =>{
            state.post = action.payload
        }
    }
})

export let{loadPosts} = postSlice.actions;