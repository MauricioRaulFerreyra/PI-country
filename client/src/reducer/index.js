const initialState = {
  countries: [],
  copyCountries: [],
  activities: [],
  details: []
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_COUNTRIES': {
      return {
        ...state,
        countries: action.payload,
        copyCountries: action.payload
      }
    }

    case 'FILTER_BY_CONTINENTS': {
      const allCountries = state.copyCountries
      const filterCountries =
        action.payload === 'All'
          ? allCountries
          : allCountries.filter(c => c.continent[0] === action.payload)

      return {
        ...state,
        countries: filterCountries
      }
    }

    case 'SEARCH_BY_NAME': {
      return {
        ...state,
        countries: action.payload
      }
    }
    case 'ORDER_ASC_DESC': {
      const orderAscDesc =
        action.payload === 'asc'
          ? state.countries.sort((a, b) => {
              if (a.name > b.name) return 1
              if (a.name < b.name) return -1
              return 0
            })
          : state.countries.sort((a, b) => {
              if (a.name > b.name) return -1
              if (a.name < b.name) return 1
              return 0
            })

      return {
        ...state,
        counties: orderAscDesc
      }
    }
    case 'ORDER_BY_POPULATION': {
      const orderPopulation =
        action.payload === 'menor'
          ? state.countries.sort((a, b) => a.population - b.population)
          : state.countries.sort((a, b) => b.population - a.population)
      return {
        ...state,
        countries: orderPopulation
      }
    }
    case 'CREATE_ACTIVITY': {
      return {
        ...state,
        activities: [...state.activities, action.payload]
      }
    }
    case 'GET_ALL_ACTIVITIES': {
      return {
        ...state,
        activities: action.payload
      }
    }
    case 'FILTER_BY_ACTIVITY': {
      const activitiesCountries = []
      state.copyCountries.map(c =>
        c.activities?.forEach(e => {
          if (e.name === action.payload) {
            activitiesCountries.push(c)
          } else {
            alert('Not found activities')
            return
          }
        })
      )
      return {
        ...state,
        countries: activitiesCountries
      }
    }
    case 'FILTER_BY_ID': {
      return {
        ...state,
        details: action.payload
      }
    }

    default: {
      return { ...state }
    }
  }
}

export default rootReducer
