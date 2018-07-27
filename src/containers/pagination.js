import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchPrevPage, fetchNextPage } from '../actions'
import { Button } from '../styled'

const Pagination = ({
  lastQuery,
  page,
  fetchPrevPage,
  fetchNextPage,
  position,
}) => {

  const handleClickPrev = () => {
    if (page <= 1) return
    fetchPrevPage(lastQuery, page - 1)
  }

  const handleClickNext = () => {
    fetchNextPage(lastQuery, page + 1)
  }

  return (
    <PaginationWpapper position={position}>
      <Button onClick={handleClickPrev}>Prev</Button>
      <div>Page: {page}</div>
      <Button onClick={handleClickNext}>Next</Button>
    </PaginationWpapper>
  )
}

Pagination.propTypes = {
  lastQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  fetchPrevPage: PropTypes.func.isRequired,
  fetchNextPage: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  lastQuery: state.beers.lastQuery,
  page: state.beers.page
})

const mapDispatchToProps = {
  fetchPrevPage, fetchNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

const PaginationWpapper = styled.div`
  grid-area: ${props => `pagination-${props.position};`}
  display: flex;
  align-items: center;
  padding: 0 11px;

  & > * {
    margin-right: 30px;
  }

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`
