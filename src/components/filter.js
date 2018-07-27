import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from '../styled'

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      abv_gt: '',
      abv_lt: '',
      ibu_gt: '',
      ibu_lt: '',
      ebc_gt: '',
      ebc_lt: '',
      beer_name: '',
      yeast: '',
      brewed_before: '',
      brewed_after: '',
      hops: '',
      malt: '',
      food: ''
    }
  }

  componentDidMount() {
  const { fetchList, page } = this.props
  fetchList({
    ...this.state
    },
    page
  )}

  fetchFilter = (e) => {
  e.preventDefault()
  const { fetchList, page } = this.props
  fetchList({
    ...this.state
    },
    page
  )}

  onChange = (e) => {
    const value = e.target.type === 'date' ? this.transformDate(e.target.value, true) : e.target.value
    this.setState({
      [e.target.name]: value
    })
  }

  transformDate = (dateString, isToState) => {
    if (!dateString) return ''
    return isToState ?
    moment(dateString, 'YYYY-MM-DD').format('DD-MM-YYYY') :
    moment(dateString, 'DD-MM-YYYY').format('YYYY-MM-DD')
  }

  render() {

    return (
      <FilterForm onSubmit={this.fetchFilter}>
        <FilterUl>
          <li>
            <F1ilterLabel>Beer name</F1ilterLabel>
            <FilterInput type='text' name='beer_name' onChange={this.onChange} value={this.state.beer_name} />
          </li>
          <li>
            <F1ilterLabel title='Alcohol By Volume'>ABV from</F1ilterLabel>
            <FilterInput type='number' min='0' max='100' name='abv_gt' onChange={this.onChange} value={this.state.abv_gt}/>
          </li>
          <li>
            <F1ilterLabel title='Alcohol By Volume'>ABV to</F1ilterLabel>
            <FilterInput type='number' min='0' max='100' name='abv_lt' onChange={this.onChange} value={this.state.abv_lt}/>
          </li>
          <li>
            <F1ilterLabel title='International Bitterness Units'>IBU from</F1ilterLabel>
            <FilterInput type='number' min='0' max='100' name='ibu_gt' onChange={this.onChange} value={this.state.ibu_gt}/>
          </li>
          <li>
            <F1ilterLabel title='International Bitterness Units'>IBU to</F1ilterLabel>
            <FilterInput type='number' min='0' max='100' name='ibu_lt' onChange={this.onChange} value={this.state.ibu_lt}/>
          </li>
          <li>
            <F1ilterLabel title='European Brewery Convention'>EBC from</F1ilterLabel>
            <FilterInput type='number' min='0' max='100' name='ebc_gt' onChange={this.onChange} value={this.state.ebc_gt}/>
          </li>
          <li>
            <F1ilterLabel title='European Brewery Convention'>EBC to</F1ilterLabel>
            <FilterInput type='number' min='0' max='100' name='ebc_lt' onChange={this.onChange} value={this.state.ebc_lt}/>
          </li>
          <li>
            <F1ilterLabel>Yeast name</F1ilterLabel>
            <FilterInput type='text' name='yeast' onChange={this.onChange} value={this.state.yeast} />
          </li>
          <li>
            <F1ilterLabel>Brewed before</F1ilterLabel>
            <FilterInput type='date' name='brewed_before' onChange={this.onChange} value={this.transformDate(this.state.brewed_before, false)} />
          </li>
          <li>
            <F1ilterLabel>Brewed after</F1ilterLabel>
            <FilterInput type='date' name='brewed_after' onChange={this.onChange} value={this.transformDate(this.state.brewed_after, false)} />
          </li>
          <li>
            <F1ilterLabel>Hops name</F1ilterLabel>
            <FilterInput type='text' name='hops' onChange={this.onChange} value={this.state.hops} />
          </li>
          <li>
            <F1ilterLabel>Malt name</F1ilterLabel>
            <FilterInput type='text' name='malt' onChange={this.onChange} value={this.state.malt} />
          </li>
          <li>
            <F1ilterLabel>Food name</F1ilterLabel>
            <FilterInput type='text' name='food' onChange={this.onChange} value={this.state.food} />
          </li>
        </FilterUl>
        <FilterSubmitButton value='Filter' />
      </FilterForm>
    )
  }
}

Filter.propTypes = {
  fetchList: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
}

export default Filter

const F1ilterLabel = styled.label`
  flex-shrink: 0;
  width: 160px;
  font-weight: 600;
  text-transform: uppercase;
`

const FilterUl = styled.ul`
  & > li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    & > li {
      justify-content: space-around;
    }
  }
`
const FilterInput = styled.input`
  display: block;
  height: 35px;
  width: 150px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.mainColor};
  background-color: #fff;

  &:focus {
    color: #fff;
    background-color: ${props => props.theme.mainColor};
    border-radius: 4px;
  }
`

const FilterForm = styled.form`
  grid-area: filter;
  padding-left: 50px;
  padding: 0 11px;

  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`

let FilterSubmitButton = Button.withComponent('input')
FilterSubmitButton = styled(FilterSubmitButton).attrs({
  type: 'submit'
})`
  letter-spacing: 5px;
  width: 100%;
  margin-top: 40px;
`
