import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: fetchBaseQuery({ baseUrl: "https://stockhub-server.vercel.app" }),
   tagTypes: ["Categories", "Products", "Product"],
   endpoints: (builder) => ({
      addUser: builder.mutation({
         query: (data) => ({
            url: "/users",
            method: "POST",
            body: data
         })
      }),
      getCategory: builder.query({
         query: () => "/allCategory",
         providesTags: ["Categories"]
      }),
      addCategory: builder.mutation({
         query: (data) => ({
            url: "/addCategory",
            method: "POST",
            body: data
         }),
         invalidatesTags: ["Categories"]
      }),
      deleteCategory: builder.mutation({
         query: (id) => ({
            url: `/allCategory/${id}`,
            method: "DELETE"
         }),
         invalidatesTags: ["Categories"]
      }),
      getProducts: builder.query({
         query: () => "/allProduct",
         providesTags: ["Products"]
      }),
      getProduct: builder.query({
         query: (id) => `/allProduct/${id}`,
         providesTags: (result, error, arg) => ["Products", {
            type: "Product",
            id: arg
         }]
      }),
      addProduct: builder.mutation({
         query: (data) => ({
            url: "/addProduct",
            method: "POST",
            body: data
         }),
         invalidatesTags: ["Products"]
      }),
      deleteProduct: builder.mutation({
         query: (id) => ({
            url: `/allProduct/${id}`,
            method: "DELETE"
         }),
         invalidatesTags: ["Products"]
      }),
      editProduct: builder.mutation({
         query: ({ id, data }) => ({
            url: `/allProductUpdate/${id}`,
            method: "PATCH",
            body: data
         }),
         invalidatesTags: (result, error, arg) => ["Products", {
            type: "Product",
            id: arg.id
         }]
      })
   })
})
export const { useAddUserMutation, useAddCategoryMutation, useGetCategoryQuery, useDeleteCategoryMutation, useAddProductMutation, useGetProductsQuery, useDeleteProductMutation, useGetProductQuery, useEditProductMutation } = apiSlice