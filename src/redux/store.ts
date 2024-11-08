
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./slices/UserSlice";
import {productSlice} from "./slices/ProductSlice";
import {commentSlice} from "./slices/CommentSlice";
import {postSlice} from "./slices/PostSlice";



export const store = configureStore({
    reducer: {
        userSlicer: userSlice.reducer,
        productSlice: productSlice.reducer,
        commentSlice: commentSlice.reducer,
        postSlice: postSlice.reducer
    }
})

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()