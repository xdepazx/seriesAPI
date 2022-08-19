import { useEffect, useState } from 'react'
import { getSeries } from '../utils/getSeries'

const useFetcher = (query) => {
  const [dataState, setDataState] = useState([])

  const getData = async () => {
    const { data } = await getSeries(query)
    if (data.Response !== 'False') {
      setDataState(data)
    } else {
      setDataState([])
    }
  }

  useEffect(() => {
    getData()
  }, [query])

  return { dataState }
}

export default useFetcher
