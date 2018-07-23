import { combineReducers } from 'redux'

const initialBeerList = {
  beerList: [],
  beer: {},
  lastQuery: '',
  page: 1,
  isFetching: false,
  isFetchingPage: false,
  isFetchingBeer: false
}

const beer = (state = initialBeerList, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_PREV_PAGE':
    case 'FETCH_NEXT_PAGE':
      return {
        ...state,
        isFetchingPage: true
      }
    case 'FETCH_BEER':
      return {
        ...state,
        beer: {},
        isFetchingBeer: true
      }
    case 'REQUEST_LIST_SUCCESS':
      return {
        ...state,
        beerList: action.payload,
        lastQuery: action.query,
        isFetching: false
      }
    case 'REQUEST_PREV_PAGE_SUCCESS':
      return {
        ...state,
        beerList: action.payload,
        page: state.page - 1,
        isFetchingPage: false
      }
    case 'REQUEST_NEXT_PAGE_SUCCESS':
      return {
        ...state,
        beerList: action.payload,
        page: state.page + 1,
        isFetchingPage: false
      }
    case 'REQUEST_BEER_SUCCESS':
      return {
        ...state,
        beer: action.payload[0],
        isFetchingBeer: false
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  beer
})

export default rootReducer
