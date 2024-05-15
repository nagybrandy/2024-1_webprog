import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const holidaysApi = createApi({
  reducerPath: 'holidayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://date.nager.at/api/v3/' }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => `AvailableCountries`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCountriesQuery } = holidaysApi