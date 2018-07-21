import React from 'react'
import BeerCard from './beerCard'

const List = ({
  beerList,
  isFetchingPage
}) => {
  return (
    <main className='beerList' style={{opacity: isFetchingPage && .3}}>
      {beerList.map((beer, id) => <BeerCard key={id} beer={beer} />)}
    </main>
  )
}

export default List
