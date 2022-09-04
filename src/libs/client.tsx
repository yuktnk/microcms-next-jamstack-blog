import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'yuktnk-blog',
  apiKey: process.env.API_KEY || '',
})
