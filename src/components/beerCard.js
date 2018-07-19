import React from 'react'

const stringDelimiter = (str, limit) => {
  return str.split(' ').slice(0, limit).join(' ') + '...';
}

const BeerCard = ({
  beer
}) => {
  const description = stringDelimiter(beer.description, 30)
  return (
    <div className='beer-card'>
      <img src={beer.image_url} height='250' alt={`${beer.name} logo`}/>
      <div className='beer-card__info'>
        <h4 className='beer-card__name'>{beer.name}</h4>
        <p className='beer-card__description'>{description}</p>
      </div>
    </div>
  )
}

export default BeerCard
