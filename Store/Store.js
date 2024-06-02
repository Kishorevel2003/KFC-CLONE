import { configureStore } from "@reduxjs/toolkit";
import cartSlicess from "./CartSlice/cartSlicess";

export const store=configureStore({
    reducer : {
        cart : cartSlicess
    },
    devTools : true
})