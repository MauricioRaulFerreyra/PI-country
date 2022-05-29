import React from 'react'
import style from './filterByActivities.module.css'
import { filterByActivity } from '../../actions/index'
import { useDispatch } from 'react-redux'

function FilterByActivities({ setCurrentPage, activities, setOrder }) {
  const dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault()
    dispatch(filterByActivity(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }

  return (
    <div className={style.container}>
      <select onChange={e => handleChange(e)} className={style.containerSelect}>
        <option className={style.containerSelectOp1} value='all'>
          search activity
        </option>
        {activities &&
          activities.map((act, i) => (
            <option
              key={i}
              className={style.containerSelectOp}
              value={act.name}
            >
              {act.name}
            </option>
          ))}
      </select>
    </div>
  )
}

export default FilterByActivities
