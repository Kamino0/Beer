import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchList } from '../actions'

import Filter from '../components/filter'
import List from '../components/list'
import Pagination from './pagination'

class Main extends Component {

  render() {
    const { beerList, fetchList, isFetching, isFetchingPage, page } = this.props
    return (
      <div className='content main-page'>
        <Filter page={page} fetchList={fetchList} />
        <Pagination position={'top'} />
        <List beerList={beerList} isFetchingPage={isFetchingPage} isFetching={isFetching} />
        <Pagination position={'bottom'} />
      </div>
    )
  }
}

Main.propTypes = {
  beerList: PropTypes.array,
  fetchList: PropTypes.func,
  isFetching: PropTypes.bool,
  isFetchingPage: PropTypes.bool,
  page: PropTypes.number
}

const mapStateToProps = state => ({
  beerList: state.beers.beerList,
  isFetching: state.beers.isFetching,
  isFetchingPage: state.beers.isFetchingPage,
  page: state.beers.page
})

const mapDispatchToProps =  {
  fetchList
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
