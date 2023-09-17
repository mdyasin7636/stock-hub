import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
      reducerPath:"api",
      baseQuery:fetchBaseQuery({baseUrl:"https://stockhub-server.vercel.app"}),
      tagTypes:["Categories"],
      endpoints:(builder)=>({
         addUser:builder.mutation({
            query:(data)=>({
              url:"/users",
              method:"POST",
              body:data
            })
         }),
         getCategory:builder.query({
            query:()=>"/allCategory",
            providesTags:["Categories"]
         }),
         addCategory:builder.mutation({
            query:(data)=>({
               url:"/addCategory",
               method:"POST",
               body:data
            }),
            invalidatesTags:["Categories"]
         })
      })
})
export const {useAddUserMutation,useAddCategoryMutation,useGetCategoryQuery}=apiSlice