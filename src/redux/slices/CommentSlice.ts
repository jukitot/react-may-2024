import {IProduct} from "../../models/IProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment";

type CommentSliceType = {
    comments: IComment[];
    comment: IComment|null;
}

const commentInitState:CommentSliceType = {
    comments: [],
    comment: null
}

export let commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentInitState,
    reducers:{
        loadComments: (state, action:PayloadAction<IComment[]>) =>{
            state.comments = action.payload
        },
        loadComment: (state, action:PayloadAction<IComment>) =>{
            state.comment = action.payload
        }
    }
})

export let{loadComments} = commentSlice.actions;