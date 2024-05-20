import { PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";


export function initProducts(previousState: ProductModel[], action: PayloadAction<ProductModel[]>){
    const newState: ProductModel[] = action.payload; //here the payload will be the initial products
    return newState;
}

export function addProduct(previousState: ProductModel[], action: PayloadAction<ProductModel>){
    const newState: ProductModel[] = [...previousState];
    newState.push(action.payload);
    return newState;
}

export function updateProduct(previousState: ProductModel[], action: PayloadAction<ProductModel>){
    const newState: ProductModel[] = [...previousState];
    const index = newState.findIndex(p=>p.id === action.payload.id);
    if(index>=0) newState[index] = action.payload;
    return newState;
}

export function deleteProduct(previousState: ProductModel[], action: PayloadAction<number>){
    const newState: ProductModel[] = [...previousState];
    const index = newState.findIndex(p=>p.id === action.payload);
    if(index>=0) newState.splice(index, 1);
    return newState;
}