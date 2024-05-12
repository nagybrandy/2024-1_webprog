import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:3030/'

// Define a service using a base URL and expected endpoints
export const graphilogicsApi = createApi({
    reducerPath: 'graphilogicsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPuzzles: builder.query({
            query: () => `puzzles`,
        }),
        getOnePuzzles: builder.query({
            query: (id) => `puzzles/${id}`,
        }),
        addPuzzle: builder.mutation({
            query: (body) => ({
              url: `puzzles`,
              method: 'POST',
              body,
            }),
        }),
        addUser: builder.mutation({
            query: (body) => ({
              url: `users`,
              method: 'POST',
              body,
            }),
        }),
        loginUser: builder.mutation({
            query: (body) => ({
              url: `authentication`,
              method: 'POST',
              body,
            }),
        }),
        registerUser: builder.mutation({
          query: (body) => ({
            url: `users`,
            method: 'POST',
            body,
          }),
      }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const 
{ useGetPuzzlesQuery, 
  useGetOnePuzzlesQuery, 
  useAddPuzzleMutation, 
  useAddUserMutation,
  useLoginUserMutation,
  useRegisterUserMutation
} = graphilogicsApi