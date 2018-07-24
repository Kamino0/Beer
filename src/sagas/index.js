import { takeLatest, put, call, all } from 'redux-saga/effects'

import * as actions from '../actions'
import { getBeerList, getBeer } from '../API'

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
  try {
    const query = createQuery(action.filters)
    const beerList = yield call(getBeerList, query, action.page)
    yield put(actions.requestList(beerList, query))
  } catch (error) {
    console.error(error)
  }
}

function* requestPrevPage(action) {
  try {
    const beerList = yield call(getBeerList, action.query, action.page)
    yield put(actions.requestPrevPage(beerList))
  } catch (error) {
    console.error(error)
  }
}
function* requestNextPage(action) {
  try {
    const beerList = yield call(getBeerList, action.query, action.page)
    yield put(actions.requestNextPage(beerList))
  } catch (error) {
    console.error(error);
  }
}

function* requestBeer(action) {
  try {
    const beer = yield call(getBeer, action.id)
    yield put(actions.requestBeer(beer))
  } catch (error) {
    console.error(error);
  }
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

function* watchFetchBeer() {
  yield takeLatest('FETCH_BEER', requestBeer)
}

export default function* rootSaga() {
  yield all([
    call(watchFetchList),
    call(watchFetchPrevPage),
    call(watchFetchNextPage),
    call(watchFetchBeer)
  ])
}
