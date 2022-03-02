import React from 'react'
import style from './filterByContinents.module.css'
import { useDispatch } from 'react-redux'
import { filterByContinents } from '../../actions'

function FilterByContinents ({ setCurrentPage }) {
  const dispatch = useDispatch()

  const handleFilter = e => {
    dispatch(filterByContinents(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div className={style.container}>
      <select
        onChange={handleFilter}
        defaultValue='default'
        className={style.containerSelect}
      >
        <option
          value='default'
          disabled='disabled'
          className={style.containerSelectOp1}
        >
          Filter by Continents
        </option>
        <option value='All' className={style.containerSelectOp}>
          All
        </option>
        <option value='Africa' className={style.containerSelectOp}>
          Africa
        </option>
        <option value='Oceania' className={style.containerSelectOp}>
          Oceania
        </option>
        <option value='Europe' className={style.containerSelectOp}>
          Europe
        </option>
        <option value='South America' className={style.containerSelectOp}>
          South America
        </option>
        <option value='North America' className={style.containerSelectOp}>
          North America
        </option>
        <option value='Asia' className={style.containerSelectOp}>
          Asia
        </option>
        <option value='Antarctica' className={style.containerSelectOp}>
          Antarctica
        </option>
      </select>
    </div>
  )
}

export default FilterByContinents
