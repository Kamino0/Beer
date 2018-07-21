import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBeer } from '../actions'

class Beer extends Component {

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.id)
  }

  render() {
    const { beer, isFetchingBeer } = this.props
    console.log(isFetchingBeer, beer)
    return (
      <div className='content beer-page'>
        {isFetchingBeer ? 'loading' : beer.name}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  beer: state.beer.beer,
  isFetchingBeer: state.beer.isFetchingBeer
})

const mapDispatchToProps = {
  fetchBeer
}

export default connect(mapStateToProps, mapDispatchToProps)(Beer)
