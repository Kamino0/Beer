import { combineReducers } from 'redux'

import beers from './beers'
import beer from './beer'

const rootReducer = combineReducers({
  beers,
  beer
})

export default rootReducer
