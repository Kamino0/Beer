import { combineReducers } from 'redux'

const initialBeerList = {
  beerList: [],
  lastQuery: '',
  page: 1
}

const beer = (state = initialBeerList, action) => {
  switch (action.type) {
    case 'REQUEST_LIST_SUCCESS':
      return {
        beerList: action.payload,
        lastQuery: action.query,
        page: 1
      }
    case 'REQUEST_PREV_PAGE_SUCCESS':
      return {
        ...state,
        beerList: action.payload,
        page: state.page - 1
      }
    case 'REQUEST_NEXT_PAGE_SUCCESS':
      return {
        ...state,
        beerList: action.payload,
        page: state.page + 1
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  beer
})

export default rootReducer
