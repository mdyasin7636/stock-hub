import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
      reducerPath:"api",
      baseQuery:fetchBaseQuery({baseUrl:"https://stockhub-server.vercel.app"}),
      endpoints:(builder)=>({
         addUser:builder.mutation({
            query:(data)=>({
              url:"/users",
              method:"POST",
              body:data
            })
         }),
         addCategory:builder.mutation({
            query:(data)=>({
               url:"/addCategory",
               method:"POST",
               body:data
            })
         })
      })
})
export const {useAddUserMutation,useAddCategoryMutation}=apiSlice