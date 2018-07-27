import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchBeer } from '../actions'
import Placeholder from '../placeholder'
import { ContentWrapper, LinkButton } from '../styled'

class Beer extends Component {

  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.id)
  }

  render() {
    const { beer, isFetchingBeer } = this.props
    return (
      <Wrapper>
        {isFetchingBeer ? <Placeholder /> :
        <Fragment>
          <BeerName>{beer.name}</BeerName>
          <BeerLogo src={beer.image_url} height='300' alt={`${beer.name} logo`} />
          <Tagline>{beer.tagline}</Tagline>
          <Property><PropertyName>First brewed:</PropertyName> {beer.first_brewed}</Property>
          <Property><PropertyName>Alcohol By Volume:</PropertyName> {beer.abv}</Property>
          <Property><PropertyName>International Bittering Units:</PropertyName> {beer.ibu}</Property>
          <Property><PropertyName>Final gravity:</PropertyName> {beer.target_fg}</Property>
          <Property><PropertyName>Original gravity:</PropertyName> {beer.target_fg}</Property>
          <Property><PropertyName>European Brewery Convention:</PropertyName> {beer.ebc}</Property>
          <Property><PropertyName>Standard Reference Method:</PropertyName> {beer.srm}</Property>
          <Property><PropertyName>PH:</PropertyName> {beer.ph}</Property>
          <Property><PropertyName>Attenuation level:</PropertyName> {beer.attenuation_level}</Property>
          <Property><PropertyName>Brewers tips:</PropertyName> {beer.brewers_tips}</Property>
          <Property><PropertyName>Description:</PropertyName> {beer.description}</Property>
          <LinkButton to='/'>to Main</LinkButton>
        </Fragment>}
      </Wrapper>
    )
  }
}

Beer.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  isFetchingBeer: PropTypes.bool.isRequired,
  fetchBeer: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  beer: state.beer.beer,
  isFetchingBeer: state.beer.isFetchingBeer
})

const mapDispatchToProps = {
  fetchBeer
}

export default connect(mapStateToProps, mapDispatchToProps)(Beer)

const Wrapper = ContentWrapper.extend`
  padding: 0 10px;
  max-width: 1000px;
`
const BeerName = styled.h2`
  margin-top: 0;
  font-size: 50px;
`
const BeerLogo = styled.img`
  float: right;
  margin: 20px;

  @media (max-width: 800px) {
    height: 200px;
    margin: 5px;
  }
`
const Tagline = styled.b`
  font-size: 30px;
  font-weight: 400;
  font-style: italic;
`
const Property = styled.p`
  font-size: 28px;
`
const PropertyName = styled.span`
  font-size: 26px;
  font-weight: 600;
`
