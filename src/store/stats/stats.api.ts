import { apiSlice } from '../api/api.slice'
import type { Purchase, View } from './stats.types'

export const statsApi = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getStats: query<{
      purchases: Purchase[]
      views_to_clicks: View[]
    }, void>({
      query: () => 'stats/plot'
    })
  })
})

export const { useGetStatsQuery } = statsApi