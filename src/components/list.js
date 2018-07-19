import React from 'react'
import BeerCard from './beerCard'

const List = ({
  beerList
}) => {
  return (
    <main className='beerList'>
      {beerList.map((beer, id) => <BeerCard key={id} beer={beer} />)}
    </main>
  )
}

export default List
