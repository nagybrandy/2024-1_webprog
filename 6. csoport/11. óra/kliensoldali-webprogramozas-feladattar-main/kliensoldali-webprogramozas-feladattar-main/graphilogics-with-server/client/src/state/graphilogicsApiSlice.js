// Need to use the React-specific entry point to import createApi
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
    getOnePuzzle: builder.query({
      query: (id) => `puzzles/${id}`,
    }),  
    addPuzzle: builder.mutation({
      query(body) {
        return {
          url: `puzzles`,
          method: 'POST',
          body,
        }
      },
    }),
    login: builder.mutation({
      query(body) {
        return {
          url: `authentication`,
          method: 'POST',
          body,
        }
      },
    }),
    register: builder.mutation({
      query(body) {
        return {
          url: `users`,
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPuzzlesQuery, useGetOnePuzzleQuery, useAddPuzzleMutation, useLoginMutation, useRegisterMutation } = graphilogicsApi