import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../Redux/productSlice"
export const store = configureStore({
    // reducerName
    reducer: {
        myProductList: productSlice
    }
})