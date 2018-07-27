import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BeerCard from './beerCard'
import Placeholder from '../placeholder'

const List = ({
  beerList,
  isFetchingPage,
  isFetching
}) => {
  return (
    <Wrapper style={{opacity: isFetchingPage && .3}}>
      {isFetching ? <PlaceholderWrapper><Placeholder /></PlaceholderWrapper> :
      beerList.map((beer, id) => <BeerCard key={id} beer={beer} />)}
    </Wrapper>
  )
}

List.propTypes = {
  beerList: PropTypes.array.isRequired,
  isFetchingPage: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default List

const Wrapper = styled.main`
  min-height: 180px;
  position: relative;
  grid-area: beerList;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    margin-top: 30px;
  }
`
const PlaceholderWrapper = styled.div`
  position: absolute;
  left: calc(50% - 50px);
`
