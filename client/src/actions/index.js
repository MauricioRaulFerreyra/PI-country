
import axios from "axios";

export const getAll = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("https://apicountries.onrender.com/countries");
      return dispatch({
        type: "GET_ALL_COUNTRIES",
        payload: response.data,
      });
    } catch (error) {
      return console.error(error);
    }
  };
};

export function filterByContinents(payload) {
  return {
    type: "FILTER_BY_CONTINENTS",
    payload,
  };
}

export const searchByName = (name) => {
  if (name) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`https://apicountries.onrender.com/countries?name=${name}`);

        if (response.data.status === 404) {
          dispatch({
            type: "NOT_FOUND",
            payload: true,
          });
        } else {
          dispatch({
            type: "SEARCH_BY_NAME",
            payload: response.data,
          });
        }
      } catch (error) {
        dispatch({ type: "NOT_FOUND", payload: true });
      }
    };
  }
};

export function orderAscDesc(value) {
  return {
    type: "ORDER_ASC_DESC",
    payload: value,
  };
}

export function orderByPopulation(value) {
  return {
    type: "ORDER_BY_POPULATION",
    payload: value,
  };
}

export const postActivity = (activity) => {
  return function () {
    try {
      const newActivity = axios.post("https://apicountries.onrender.com/activities", activity);
      return newActivity;
    } catch (error) {
      return console.error(error);
    }
  };
};

export const getAllActivities = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("https://apicountries.onrender.com/activities");
      return dispatch({
        type: "GET_ALL_ACTIVITIES",
        payload: response.data,
      });
    } catch (error) {
      return console.error(error);
    }
  };
};

export function filterByActivity(activity) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload: activity,
  };
}

export const filterById = (id) => {
  return async function (dispatch) {
    const response = await fetch(`https://apicountries.onrender.com/countries/${id}`);
    const data = await response.json();
    return dispatch({
      type: "FILTER_BY_ID",
      payload: data,
    });
  };
};
