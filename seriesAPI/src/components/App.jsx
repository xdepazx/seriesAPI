import { useRef, useState } from 'react'

import useFetcher from '../hooks/useFetcher'

import Series from './Series'

// const url = `https://api.tvmaze.com/search/shows?q=${query}`

function App () {
  const searchRef = useRef(null)
  const [query, setQuery] = useState(null)
  const { dataState: series } = useFetcher(query)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    e.target.reset()
  }
  return (
    <section className='container'>
      <h4 className='py-4 text-center'>TV API</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input ref={searchRef} type='search' placeholder='Nombre de la serie...' className='form-control' name='buscador' autoFocus />
          <button className='btn btn-dark'>Buscar</button>
        </div>
      </form>
      <section className='py-4'>
        <Series data={series} />
      </section>
    </section>
  )
}

export default App
