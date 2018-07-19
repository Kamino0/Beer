import { takeLatest, put, call, all } from 'redux-saga/effects'

import * as actions from '../actions'
import { getBeerList } from '../API'

const createQuery = (filters) => {
  let filtersQuery = ''
  for (let item in filters) {
    if (filters[item] === '') continue
    else if (item === 'brewed_before' || item === 'brewed_after') filters[item] = filters[item].substring(3) //Cutting day, API require MM-YYYY
    filtersQuery += `&${item}=${filters[item]}`
  }
  return `?${filtersQuery}&per_page=12`
}

function* requestList(action) {
  const query = createQuery(action.filters)
  const beerList = yield call(getBeerList, query, 1)
  yield put(actions.requestList(beerList, query))
}

function* requestPrevPage(action) {
  const beerList = yield call(getBeerList, action.query, action.page)
  yield put(actions.requestPrevPage(beerList))
}
function* requestNextPage(action) {
  const beerList = yield call(getBeerList, action.query, action.page)
  yield put(actions.requestNextPage(beerList))
}

function* watchFetchList() {
  yield takeLatest('FETCH_LIST', requestList)
}

function* watchFetchPrevPage() {
  yield takeLatest('FETCH_PREV_PAGE', requestPrevPage)
}
function* watchFetchNextPage() {
  yield takeLatest('FETCH_NEXT_PAGE', requestNextPage)
}

export default function* rootSaga() {
  yield all([
    call(watchFetchList),
    call(watchFetchPrevPage),
    call(watchFetchNextPage)
  ])
}
