import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchBeer } from '../actions'

class Beer extends Component {

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.id)
  }

  render() {
    const { beer, isFetchingBeer } = this.props
    return (
      <div className='content beer-page'>
        {isFetchingBeer ? 'loading' :
          <Fragment>
            <img className='beer-page__logo' src={beer.image_url} height='300' alt={`${beer.name} logo`} />
            <h2 className='beer-page__name'>{beer.name}</h2>
            <b className='beer-page__tagline'>{beer.tagline}</b>
            <p><span className='beer-page__property-name'>First brewed:</span> {beer.first_brewed}</p>
            <p><span className='beer-page__property-name'>Alcohol By Volume:</span> {beer.abv}</p>
            <p><span className='beer-page__property-name'>International Bittering Units:</span> {beer.ibu}</p>
            <p><span className='beer-page__property-name'>Final gravity:</span> {beer.target_fg}</p>
            <p><span className='beer-page__property-name'>Original gravity:</span> {beer.target_fg}</p>
            <p><span className='beer-page__property-name'>European Brewery Convention:</span> {beer.ebc}</p>
            <p><span className='beer-page__property-name'>Standard Reference Method:</span> {beer.srm}</p>
            <p><span className='beer-page__property-name'>PH:</span> {beer.ph}</p>
            <p><span className='beer-page__property-name'>Attenuation level:</span> {beer.attenuation_level}</p>
            <p><span className='beer-page__property-name'>Brewers tips:</span> {beer.brewers_tips}</p>
            <p><span className='beer-page__property-name'>Description:</span> {beer.description}</p>
          </Fragment>
        }
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
