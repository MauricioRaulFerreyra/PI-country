import axios from 'axios'

export const getAll = () => {
  return async function (dispatch) {
    const response = await axios.get('https://country-app-pi.herokuapp.com/countries')
    return dispatch(
      {
        type: 'GET_ALL_COUNTRIES',
        payload: response.data
      }
    )
  }
}


export function filterByContinents(payload) {
  return {
    type: 'FILTER_BY_CONTINENTS',
    payload
  }
}

export const searchByName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(`https://country-app-pi.herokuapp.com/countries?name=${name}`)
    return dispatch(
      {
        type: 'SEARCH_BY_NAME',
        payload: response.data
      }
    )
  }
}



export function orderAscDesc(value) {
  return {
    type: 'ORDER_ASC_DESC',
    payload: value
  }
}

export function orderByPopulation(value) {
  return {
    type: 'ORDER_BY_POPULATION',
    payload: value
  }
}


export const postActivity = activity => {
  return async function (dispatch) {
    const newActivity = await axios.post(
      'https://country-app-pi.herokuapp.com/activities',
      activity
    )
    return dispatch({
      type: 'CREATE_ACTIVITY',
      payload: newActivity
    })
  }
}

export const getAllActivities = () => {
  return async function (dispatch) {
    const response = await axios.get('https://country-app-pi.herokuapp.com/activities')
    return dispatch(
      {
        type: 'GET_ALL_ACTIVITIES',
        payload: response.data
      },
    )
  }
}



export function filterByActivity(activity) {
  return {
    type: 'FILTER_BY_ACTIVITY',
    payload: activity
  }
}



export const filterById = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://country-app-pi.herokuapp.com/countries/${id}`)
    return dispatch(
      {
        type: 'FILTER_BY_ID',
        payload: response.data
      },
    )
  }
}

