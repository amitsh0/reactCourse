import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { addProduct, deleteProduct, initProducts, updateProduct } from "./reducers";

//application level entire state(all slices)
export type AppState = {
    products: ProductModel[];
};

const productSlice = createSlice({
    name: "products", //internal use
    initialState: [],
    reducers: {initProducts, addProduct, updateProduct, deleteProduct}
});

//action creators
export const productActions = productSlice.actions;

export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer
    }
});