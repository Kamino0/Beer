import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchList } from '../actions'
import Filter from '../components/filter'
import List from '../components/list'
import Pagination from './pagination'
import { ContentWrapper } from '../styled'

class Main extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    const { beerList, fetchList, isFetching, isFetchingPage, page } = this.props
    return (
      <Wrapper>
        <Filter page={page} fetchList={fetchList} />
        <Pagination position={'top'} />
        <List beerList={beerList} isFetchingPage={isFetchingPage} isFetching={isFetching} />
        <Pagination position={'bottom'} />
      </Wrapper>
    )
  }
}

Main.propTypes = {
  beerList: PropTypes.array.isRequired,
  fetchList: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingPage: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired
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

const Wrapper = ContentWrapper.extend`
  min-width: calc(100vw - 15px);
  display: grid;
  grid-template-columns: 350px auto;
  grid-template-rows: 40px 1fr 40px;
  grid-template-areas:
    ". pagination-top"
    "filter beerList"
    ". pagination-bottom";
  grid-row-gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "filter"
      "pagination-top"
      "beerList"
      "pagination-bottom";
    grid-row-gap: 0;
  }
`
