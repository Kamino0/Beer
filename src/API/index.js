import axios from 'axios'

const URL = 'https://api.punkapi.com/v2/beers'

export const getBeerList = (query, pageNum) => {
  return axios(`${URL}${query}&page=${pageNum}`)
    .then(res => res.data)
}

export const getBeer = (id) => {
  return axios(`${URL}/${id}`)
    .then(res => res.data)
}
