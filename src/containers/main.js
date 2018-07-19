import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchList } from '../actions'

import Filter from '../components/filter'
import List from '../components/list'
import Pagination from './pagination'

class Main extends Component {

  render() {
    const { beerList, fetchList } = this.props
    return (
      <Fragment>
        <Filter fetchList={fetchList}/>
        <Pagination position={'top'}/>
        <List beerList={beerList} />
        <Pagination position={'bottom'}/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    beerList: state.beer.beerList
  }
}

const mapDispatchToProps =  {
  fetchList
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
