export const fetchList = (filters) => {
  return {
    type: 'FETCH_LIST',
    filters
  }
}

export const fetchPrevPage = (query, page) => {
  return {
    type: 'FETCH_PREV_PAGE',
    query,
    page
  }
}
export const fetchNextPage = (query, page) => {
  return {
    type: 'FETCH_NEXT_PAGE',
    query,
    page
  }
}

export const requestList = (payload, query) => {
  return {
    type: 'REQUEST_LIST_SUCCESS',
    payload,
    query
  }
}

export const requestPrevPage = (payload) => {
  return {
    type: 'REQUEST_PREV_PAGE_SUCCESS',
    payload
  }
}
export const requestNextPage = (payload) => {
  return {
    type: 'REQUEST_NEXT_PAGE_SUCCESS',
    payload
  }
}
