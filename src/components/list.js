import React from 'react'

import BeerCard from './beerCard'
import Placeholder from '../components/placeholder'

const List = ({
  beerList,
  isFetchingPage,
  isFetching
}) => {
  return (
    <main className='beerList' style={{opacity: isFetchingPage && .3}}>
      {isFetching ? <div className='beerList__placeholder-wrap'><Placeholder /></div> :
      beerList.map((beer, id) => <BeerCard key={id} beer={beer} />)
      }
    </main>
  )
}

export default List
