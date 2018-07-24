import React from 'react'
import PropTypes from 'prop-types'

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
      beerList.map((beer, id) => <BeerCard key={id} beer={beer} />)}
    </main>
  )
}

List.propTypes = {
  beerList: PropTypes.array,
  isFetchingPage: PropTypes.bool,
  isFetching: PropTypes.bool,
}

export default List
