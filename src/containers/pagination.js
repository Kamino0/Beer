import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchPrevPage, fetchNextPage } from '../actions'

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
    <div className={`pagination-${position} pagination`}>
      <button className='pagination__button button' onClick={handleClickPrev}>Prev</button>
      <div className='pagination__page-number'>Page: {page}</div>
      <button className='pagination__button button' onClick={handleClickNext}>Next</button>
    </div>
  )
}

Pagination.propTypes = {
  lastQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  fetchPrevPage: PropTypes.func.isRequired,
  fetchNextPage: PropTypes.func.isRequired,
  position: PropTypes.string
}

const mapStateToProps = state => ({
  lastQuery: state.beers.lastQuery,
  page: state.beers.page
})

const mapDispatchToProps = {
  fetchPrevPage, fetchNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
