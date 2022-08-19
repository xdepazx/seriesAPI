const CardSeries = (item) => {
  return (
    <div className='card-group'>
      <div className='card shadow-sm mb-5 rounded'>
        <img className='card-img-top' src={item.show.image?.medium} alt={item.show.name} />
        <div className='card-body text-dark text-center'>
          <h5 className='card-title'>{item.show.name}</h5>
          <p>{item.show.type}</p>
          <p>{item.show.id}</p>
        </div>
      </div>
    </div>
  )
}

export default CardSeries
