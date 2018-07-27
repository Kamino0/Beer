import {
  FETCH_LIST,
  FETCH_PREV_PAGE,
  FETCH_NEXT_PAGE,
  REQUEST_LIST_SUCCESS,
  REQUEST_PREV_PAGE_SUCCESS,
  REQUEST_NEXT_PAGE_SUCCESS
} from '../actions'

const initialBeers = {
  beerList: [],
  lastQuery: '',
  page: 1,
  isFetching: false,
  isFetchingPage: false
}
const beers = (state = initialBeers, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_PREV_PAGE:
    case FETCH_NEXT_PAGE:
      return {
        ...state,
        isFetchingPage: true
      }
    case REQUEST_LIST_SUCCESS:
      return {
        ...state,
        beerList: action.payload,
        lastQuery: action.query,
        isFetching: false
      }
    case REQUEST_PREV_PAGE_SUCCESS:
      return {
        ...state,
        beerList: action.payload,
        page: state.page - 1,
        isFetchingPage: false
      }
    case REQUEST_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        beerList: action.payload,
        page: state.page + 1,
        isFetchingPage: false
      }
    default:
      return state
  }
}

export default beers
