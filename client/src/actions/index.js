import axios from 'axios'

export function getAll () {
  return function (dispatch) {
    return fetch('http://localhost:3001/countries')
      .then(
        response => response.json(),
        err => console.log(err)
      )
      .then(data => {
        dispatch({ type: 'GET_ALL_COUNTRIES', payload: data }, err =>
          console.log(err)
        )
      })
    //.catch(err => console.error(err)); -> cuando no hay errorhandler definidos anteriormente
  }
}

export function filterByContinents (payload) {
  return {
    type: 'FILTER_BY_CONTINENTS',
    payload
  }
}

export function searchByName (name) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries?name=${name}`)
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

// export const searchByName = (name) => {
//   return async function(dispatch) {
//       const filterName = await axios.get(`http://localhost:3001/countries?name=${name}`)
//       return dispatch({
//           type: 'SEARCH_BY_NAME',
//           payload: filterName.data
//       })
//   }
// }

export function orderAscDesc (value) {
  return {
    type: 'ORDER_ASC_DESC',
    payload: value
  }
}

export function orderByPopulation (value) {
  return {
    type: 'ORDER_BY_POPULATION',
    payload: value
  }
}

// export function postActivity (activity) {
//   return function (dispatch) {
//     return fetch('http://localhost:3001/activities', activity)
//       .then(
//         response => response.json(),
//         err => console.log(err)
//       )
//       .then(data => {
//         dispatch(
//           {
//             type: 'CREATE_ACTIVITY',
//             payload: data
//           },
//           err => console.log(err)
//         )
//       })
//   }
// }

export const postActivity = activity => {
  return async function (dispatch) {
    const newActivity = await axios.post(
      'http://localhost:3001/activities',
      activity
    )
    return dispatch({
      type: 'CREATE_ACTIVITY',
      payload: newActivity
    })
  }
}

export function getAllActivities () {
  return function (dispatch) {
    return fetch('http://localhost:3001/activities')
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

// export const getAllActivities = () => {
//   return async function(dispatch) {
//       const activities = await axios.get("http://localhost:3001/activities")
//       return dispatch({
//           type: 'GET_ALL_ACTIVITIES',
//           payload: activities.data
//       })
//   }
// }

export function filterByActivity (activity) {
  return {
    type: 'FILTER_BY_ACTIVITY',
    payload: activity
  }
}

// export const filterById = id => {
//   return async function (dispatch) {
//     const detailCountry = await axios.get(
//       `http://localhost:3001/countries/${id}`
//     )
//     return dispatch({
//       type: 'FILTER_BY_ID',
//       payload: detailCountry.data
//     })
//   }
// }

export function filterById (id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries/${id}`)
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
