import axios from 'axios'

export function getAll() {
  return function (dispatch) {
    return fetch('https://country-app-pi.herokuapp.com/countries')
      .then(
        response => response.json(),
        err => console.log(err)
      )
      .then(data => {
        dispatch({ type: 'GET_ALL_COUNTRIES', payload: data }, err =>
          console.log(err)
        )
      })
  }
}

export function filterByContinents(payload) {
  return {
    type: 'FILTER_BY_CONTINENTS',
    payload
  }
}

export function searchByName(name) {
  return function (dispatch) {
    return fetch(`https://country-app-pi.herokuapp.com/countries?name=${name}`)
      .then(
        response => response.json(),
        err => console.log(err)
      )
      .then(data => {
        dispatch(
          {
            type: 'SEARCH_BY_NAME',
            payload: data
          },
          err => console.log(err)
        )
      })
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

export function getAllActivities() {
  return function (dispatch) {
    return fetch('https://country-app-pi.herokuapp.com/activities')
      .then(
        response => response.json(),
        err => console.log(err)
      )
      .then(data => {
        dispatch(
          {
            type: 'GET_ALL_ACTIVITIES',
            payload: data
          },
          err => console.log(err)
        )
      })
  }
}


export function filterByActivity(activity) {
  return {
    type: 'FILTER_BY_ACTIVITY',
    payload: activity
  }
}



export function filterById(id) {
  return function (dispatch) {
    return fetch(`https://country-app-pi.herokuapp.com/countries/${id}`)
      .then(
        response => response.json(),
        err => console.log(err)
      )
      .then(data => {
        dispatch(
          {
            type: 'FILTER_BY_ID',
            payload: data
          },
          err => console.log(err)
        )
      })
  }
}
