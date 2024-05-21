import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { addProduct, deleteProduct, initProducts, loginUser, logoutUser, registerUser, updateProduct } from "./reducers";
import { UserModel } from "../Models/UserModel";
import { logger } from "./middleware";

//application level entire state(all slices)
export type AppState = {
    products: ProductModel[];
    user: UserModel;
};

const productSlice = createSlice({
    name: "products", //internal use
    initialState: [],
    reducers: {initProducts, addProduct, updateProduct, deleteProduct}
});

const userSlice = createSlice({
    name: "user", //internal use
    initialState: null,
    reducers: {registerUser, loginUser, logoutUser}
});

//action creators
export const productActions = productSlice.actions;
export const userActions = userSlice.actions;

export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer,
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any
});