import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const stringDelimiter = (str, limit) =>
  `${str.split(' ').slice(0, limit).join(' ')}...`

const BeerCard = ({
  beer
}) => {
  const description = stringDelimiter(beer.description, 30)
  return (
    <Link to={`/beer/${beer.id}`} className='beer-card'>
      <figure className='beer-card__image'>
        <img src={beer.image_url} height='250' alt={`${beer.name} logo`}/>
      </figure>
      <div className='beer-card__info'>
        <h4 className='beer-card__name'>{beer.name}</h4>
        <p className='beer-card__description'>{description}</p>
      </div>
    </Link>
  )
}

BeerCard.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  }).isRequired
}

export default BeerCard
