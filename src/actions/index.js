export const FETCH_LIST = 'FETCH_LIST'
export const FETCH_PREV_PAGE = 'FETCH_PREV_PAGE'
export const FETCH_NEXT_PAGE = 'FETCH_NEXT_PAGE'
export const FETCH_BEER = 'FETCH_BEER'
export const REQUEST_LIST_SUCCESS = 'REQUEST_LIST_SUCCESS'
export const REQUEST_PREV_PAGE_SUCCESS = 'REQUEST_PREV_PAGE_SUCCESS'
export const REQUEST_NEXT_PAGE_SUCCESS = 'REQUEST_NEXT_PAGE_SUCCESS'
export const REQUEST_BEER_SUCCESS = 'REQUEST_BEER_SUCCESS'

export const fetchList = (filters, page) => ({
  type: FETCH_LIST,
  filters,
  page
})

export const fetchPrevPage = (query, page) => ({
  type: FETCH_PREV_PAGE,
  query,
  page
})

export const fetchNextPage = (query, page) => ({
  type: FETCH_NEXT_PAGE,
  query,
  page
})

export const fetchBeer = (id) => ({
  type: FETCH_BEER,
  id
})

export const requestList = (payload, query) => ({
  type: REQUEST_LIST_SUCCESS,
  payload,
  query
})

export const requestPrevPage = (payload) => ({
  type: REQUEST_PREV_PAGE_SUCCESS,
  payload
})

export const requestNextPage = (payload) => ({
  type: REQUEST_NEXT_PAGE_SUCCESS,
  payload
})

export const requestBeer = (payload) => ({
  type: REQUEST_BEER_SUCCESS,
  payload
})
