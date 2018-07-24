import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

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
      <form className='filter' onSubmit={this.fetchFilter}>
        <ul>
          <li>
            <label>Beer name</label><input type='text' name='beer_name' onChange={this.onChange} value={this.state.beer_name} />
          </li>
          <li>
            <label title='Alcohol By Volume'>ABV from</label><input type='number' min='0' max='100' name='abv_gt' onChange={this.onChange} value={this.state.abv_gt}/>
          </li>
          <li>
            <label title='Alcohol By Volume'>ABV to</label><input type='number' min='0' max='100' name='abv_lt' onChange={this.onChange} value={this.state.abv_lt}/>
          </li>
          <li>
            <label title='International Bitterness Units'>IBU from</label><input type='number' min='0' max='100' name='ibu_gt' onChange={this.onChange} value={this.state.ibu_gt}/>
          </li>
          <li>
            <label title='International Bitterness Units'>IBU to</label><input type='number' min='0' max='100' name='ibu_lt' onChange={this.onChange} value={this.state.ibu_lt}/>
          </li>
          <li>
            <label title='European Brewery Convention'>EBC from</label><input type='number' min='0' max='100' name='ebc_gt' onChange={this.onChange} value={this.state.ebc_gt}/>
          </li>
          <li>
            <label title='European Brewery Convention'>EBC to</label><input type='number' min='0' max='100' name='ebc_lt' onChange={this.onChange} value={this.state.ebc_lt}/>
          </li>
          <li>
            <label>Yeast name</label><input type='text' name='yeast' onChange={this.onChange} value={this.state.yeast} />
          </li>
          <li>
            <label>Brewed before</label><input type='date' name='brewed_before' onChange={this.onChange} value={this.transformDate(this.state.brewed_before, false)} />
          </li>
          <li>
            <label>Brewed after</label><input type='date' name='brewed_after' onChange={this.onChange} value={this.transformDate(this.state.brewed_after, false)} />
          </li>
          <li>
            <label>Hops name</label><input type='text' name='hops' onChange={this.onChange} value={this.state.hops} />
          </li>
          <li>
            <label>Malt name</label><input type='text' name='malt' onChange={this.onChange} value={this.state.malt} />
          </li>
          <li>
            <label>Food name</label><input type='text' name='food' onChange={this.onChange} value={this.state.food} />
          </li>
        </ul>
        <input type='submit' className='button' value='Filter' />
      </form>
    )
  }
}

Filter.propTypes = {
  fetchList: PropTypes.func,
  page: PropTypes.number
}

export default Filter
