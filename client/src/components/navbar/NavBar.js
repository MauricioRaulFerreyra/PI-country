import React from 'react'
import OrderAscDesc from '../orderAscDesc/OrderAscDesc'
import OrderByPopulation from '../orderByPopulation/OrderByPopulation'
import FilterByActivities from '../filterByActivities/FilterByActivities'
import style from './NavBar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAll } from '../../actions/index'

export default function NavBar ({ setCurrentPage, setOrder }) {
  const activities = useSelector(state => state.activities)

  const history = useHistory()
  const dispatch = useDispatch()

  function handleBack (e) {
    e.preventDefault()
    history.push('/')
  }
  function handleReload (e) {
    e.preventDefault()
    dispatch(getAll())
  }

  return (
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

      <OrderByPopulation setCurrentPage={setCurrentPage} setOrder={setOrder} />

      <OrderAscDesc setCurrentPage={setCurrentPage} setOrder={setOrder} />

      <FilterByActivities
        activities={activities}
        setOrder={setOrder}
        setCurrentPage={setCurrentPage}
      />
    </nav>
  )
}
