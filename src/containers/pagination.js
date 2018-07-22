import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPrevPage, fetchNextPage } from '../actions'

class Pagination extends Component {

  render() {
    const { lastQuery, page, fetchPrevPage, fetchNextPage, position} = this.props
    return (
      <div className={`pagination-${position} pagination`}>
        <button className='pagination__button button' onClick={() => fetchPrevPage(lastQuery, page - 1)}>Prev</button>
        <div className='pagination__page-number'>Page: {page}</div>
        <button className='pagination__button button' onClick={() => fetchNextPage(lastQuery, page + 1)}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lastQuery: state.beer.lastQuery,
    page: state.beer.page
  }
}

const mapDispatchToProps = {
  fetchPrevPage, fetchNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
