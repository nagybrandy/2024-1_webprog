import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints

const baseUrl = 'http://localhost:3030'
export const graphilogicsApi = createApi({
  reducerPath: 'graphilogicsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['puzzles', 'User'],
  endpoints: (builder) => ({
    getPuzzles: builder.query({
      query: () => `puzzles?$limit=50`,
      providesTags: ['puzzles'],
    }),
    getOnePuzzle: builder.query({
      query: (id) => `puzzles/${id}`,
      providesTags: ['puzzles'],
    }),
    addPuzzle: builder.mutation({
      query: (body) => ({
        url: `puzzles`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['puzzles'],
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: `users`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `authentication`,
        method: 'POST',
        body: {...body, strategy: 'local'},
      }),
      invalidatesTags: ['User'],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: `users`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPuzzlesQuery, 
               useGetOnePuzzleQuery, 
               useAddPuzzleMutation,
               useAddUserMutation,
               useLoginUserMutation,
               useRegisterUserMutation } = graphilogicsApi