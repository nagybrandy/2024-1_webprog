import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const holidaysApi = createApi({
  reducerPath: 'holidaysApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://date.nager.at/api/v3/' }),
  endpoints: (builder) => ({
    getContries: builder.query({
      query: () => `AvailableCountries`,
    }),
    getOneContryByYear: builder.query({
        query: ({year, countryCode}) => `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContriesQuery, useGetOneContryByYearQuery } = holidaysApi