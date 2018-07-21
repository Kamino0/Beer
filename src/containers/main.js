import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchList } from '../actions'

import Filter from '../components/filter'
import List from '../components/list'
import Pagination from './pagination'

class Main extends Component {

  render() {
    const { beerList, fetchList, isFetchingPage } = this.props
    return (
      <div className='content main-page'>
        <Filter fetchList={fetchList} />
        <Pagination position={'top'} />
        <List beerList={beerList} isFetchingPage={isFetchingPage} />
        <Pagination position={'bottom'} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    beerList: state.beer.beerList,
    isFetchingPage: state.beer.isFetchingPage
  }
}

const mapDispatchToProps =  {
  fetchList
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
