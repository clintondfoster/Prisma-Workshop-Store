import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./reducers/api";
import authReducer from "./reducers/auth";

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

export default store;