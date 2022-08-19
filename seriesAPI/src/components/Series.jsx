import CardSeries from './CardSeries'

const Series = ({ data }) => {
  console.log(data)
  return (
    <section className='py-4'>
      {
      data.length === 0
        ? 'No se encontraron resultados'
        : (
          <ul className='row gx-0 gx-md-5 gy-4'>
            {data.map(item => (
              <li className='col-12 col-md-6 col-lg-3' key={item.show.name}>
                <CardSeries {...item} />
              </li>
            )
            )}
          </ul>
          )
      }
    </section>
  )
}

export default Series
