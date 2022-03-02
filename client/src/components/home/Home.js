import React from 'react'
import style from './home.module.css'
import styleloading from './loading.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getAll, getAllActivities } from './../../actions/index'
import Card from '../card/Card'
import Paginated from '../paginated/Paginated'
import SearchCountry from '../searchCountry/SearchCountry'
import FilterByContinents from '../filterByContinents/FilterByContinents'

function Home () {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  //const activities = useEffect(state => state.activities)
  let history = useHistory()

  useEffect(() => {
    dispatch(getAll())
  }, [])

  useEffect(() => {
    dispatch(getAllActivities())
  }, [])

  /*------------- PAGINATION ------------------*/
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPage, setCountriesPage] = useState(10)

  const lastPos = currentPage * countriesPage // 1 * 10 = 10
  const firstPos = lastPos - countriesPage // 10 - 10 = 0
  const currentCountries = countries && countries.slice(firstPos, lastPos) // [ 0,1,2,3,4,5,6,7,8,9 ]  el 10 no incluye el array

  const pagination = page => {
    // esta funcion sirve para el renderizado
    setCurrentPage(page)
  }

  function handleBack (e) {
    e.preventDefault()
    history.push('/')
  }
  function handleReload (e) {
    e.preventDefault()
    dispatch(getAll())
  }

  return (
    <div className={style.container}>
      <nav className={style.containerNav}>
        <div>
          <button onClick={e => handleBack(e)} className={style.BtnReload}>
            Back
          </button>
        </div>
        <div>
          <button onClick={e => handleReload(e)} className={style.BtnReload}>
            Reload
          </button>
        </div>
      </nav>
      <div className={style.containerInferior}>
        <div className={style.containerInferiorSub1}>
          <SearchCountry setCurrentPage={setCurrentPage} />
          <FilterByContinents setCurrentPage={setCurrentPage} />
        </div>

        <div className={style.containerInferiorSub2}>
          <div className={style.containerPaginated}>
            <Paginated
              countriesPage={countriesPage}
              countries={countries && countries.length}
              pagination={pagination}
            />
          </div>

          <div
            className={
              currentCountries.length < 3 ? style.flexContainer : style.grid
            }
          >
            {currentCountries.length > 0 ? (
              currentCountries.map((el, i) => (
                <Card
                  key={i}
                  id={el.id}
                  image={el.image}
                  name={el.name}
                  continent={el.continent}
                  population={el.population}
                />
              ))
            ) : (
              <div className={styleloading.containerLoading}>
                <div className={styleloading.ldsSpinner}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
