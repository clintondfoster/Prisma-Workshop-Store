import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    tagTypes: [products],
    reducerPath: 'model_product',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5174/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ()=>'api/products'
        }),
        getProductById :builder.query({
            query: (id)=> 'api/products/'+id
        }),
        getStores: builder.query({
            query: ()=>'api/stores'
        }),
        getStoreById :builder.query({
            query: (id)=> 'api/stores/'+id
        }),
        deleteProduct: builder.mutation({
            query: (id)=>({
                url:'api/products/'+id,
                method:"DELETE"
            })
        }),
        deleteStore: builder.mutation({
            query: (id)=>({
                url:'api/stores/'+id,
                method: "DELETE"
            })
        }),
        addProduct: builder.mutation({
            query: (body)=>({
                url:'api/products',
                method:"POST",
                body:body
            })
        }),
        addStore: builder.mutation({
            query: (body)=>({
                url:'api/stores',
                method:"POST",
                body:body
            })
        }),
        editProduct: builder.mutation({
            query(data){
                const {id, ...body}=data;
                return {
                    url: 'api/products/'+id,
                    method:"PUT",
                    body
                }
            }
        }),
        editStore: builder.mutation({
            query(data){
                const {id, ...body}=data;
                return {
                    url: 'api/stores/'+id,
                    method:"PUT",
                    body
                }
            }
        })
    })
})

export const { useEditStoreMutation, useEditProductMutation, useAddStoreMutation, useAddProductMutation, useDeleteProductMutation, useDeleteStoreMutation, useGetProductsQuery, useGetStoresQuery, useGetProductByIdQuery, useGetStoreByIdQuery}