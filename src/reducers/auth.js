import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "./api";

//session storage key
const CREDENTIALS = "credentials";

const authApi = productApi.injectEndpoints({
    endpoints: (builder) => {
        me: builder.query({
            query: ()=> "auth/me",
        }),
        login: builder.mutation ({
            query: (cred)=> ({
                url: "auth/login",
                method: "POST",
                body: cred
            })
        }),
        register: builder.mutation ({
            query: ()=> ({
                url: "auth/register",
                method: "POST",
                body: cred
            })
        }),
        logout: builder.mutation ({
            query: ()=> ({
        
        })
    })
    }
})

function storeToken(state, {payload}) {
    state.creditials = {token: payload.token, user: {...payload.user}};
    window.sessionStorage.setItem(
        CREDENTIALS,
        JSON.stringify({
            token: payload.token,
            user: {...payload.user}
        })
    )
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        creditials : JSON.parse(window.sessionStorage.getItem(CREDENTIALS)) || {
            token: "",
            user: {userId:null}
        }
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addMatcher(productApi.endpoints.login.matchFulfilled, storeToken)
        builder.addMatcher(productApi.endpoints.register.matchFulfilled, storeToken)
        builder.addMatcher(productApi.endpoints.logout.matchFulfilled, (state)=> {
            state.creditials = {
                token: "",
            user: {userId:null}
            };
            window.sessionStorage.removeItem(CREDENTIALS);
        })
    }
})

export const { 
    useMeQuery,
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
} = authApi

export default authSlice.reducer;