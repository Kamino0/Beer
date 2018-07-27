import {
  FETCH_BEER,
  REQUEST_BEER_SUCCESS
} from '../actions'

const initialBeer = {
  beer: {},
  isFetchingBeer: false
}
const beer = (state = initialBeer, action) => {
  switch (action.type) {
    case FETCH_BEER:
      return {
        ...state,
        beer: {},
        isFetchingBeer: true
      }
    case REQUEST_BEER_SUCCESS:
      return {
        ...state,
        beer: action.payload[0],
        isFetchingBeer: false
      }
    default:
      return state
  }
}

export default beer
