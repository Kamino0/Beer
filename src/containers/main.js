import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchList } from '../actions'

import Filter from '../components/filter'
import List from '../components/list'
import Pagination from './pagination'

class Main extends Component {

  render() {
    const { beerList, fetchList, isFetchingPage, page } = this.props
    return (
      <div className='content main-page'>
        <Filter page={page} fetchList={fetchList} />
        <Pagination position={'top'} />
        <List beerList={beerList}isFetchingPage={isFetchingPage} />
        <Pagination position={'bottom'} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  beerList: state.beer.beerList,
  isFetchingPage: state.beer.isFetchingPage,
  page: state.beer.page
})

const mapDispatchToProps =  {
  fetchList
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
