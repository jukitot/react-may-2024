import {IProduct} from "../../models/IProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ProductSliceType = {
    products: IProduct[];
    product: IProduct|null;
}

const productInitState:ProductSliceType = {
    products: [],
    product: null
}

export let productSlice = createSlice({
    name: 'productSlice',
    initialState: productInitState,
    reducers:{
        loadProducts: (state, action:PayloadAction<IProduct[]>) =>{
            state.products = action.payload
        },
        loadProduct: (state, action:PayloadAction<IProduct>) =>{
            state.product = action.payload
        }
    }
})

export let{loadProducts} = productSlice.actions;