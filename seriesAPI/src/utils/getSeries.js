import axios from 'axios'

const baseUrl = 'https://api.tvmaze.com/search/shows?q'

export const getSeries = async (query) => {
  return await axios.get(`${baseUrl}=${query}`)
}
