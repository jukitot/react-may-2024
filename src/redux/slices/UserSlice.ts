import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";


type UserSliceType = {
    users:IUser[]
    user: IUser|null
}

const userInitState:UserSliceType = {
    users:[],
    user: null
}

export let userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers:{
        loadUsers: (state, action:PayloadAction<IUser[]>)=>{
            state.users = action.payload
        },
        loadUser:(state, action:PayloadAction<IUser>)=>{
            state.user = action.payload
        }
    }
})

export let {loadUser, loadUsers} = userSlice.actions;