import React from 'react'
import style from './searchCountry.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { searchByName } from './../../actions/index'

function SearchCountry ({ setCurrentPage }) {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const [error, setError] = useState({ name: '' })

  const countries = useSelector(state => state.copyCountries)

  const validate = value => {
    let errors = {}
    const findCountry = countries.find(el =>
      el.name.toLowerCase().includes(value.toLowerCase())
    )
    if (!value) {
      errors.name = 'Required field'
    } else if (findCountry === undefined) {
      errors.name = 'Country not found'
    }
    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()
    setError(validate(name))
    if (Object.keys(validate(name)).length === 0) {
      dispatch(searchByName(name))
      setCurrentPage(1)
      setName('')
    }
    setName('')
  }
  const handleChange = e => {
    setName(e.target.value)
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='search country'
          value={name}
          onChange={handleChange}
          className={style.inputSearch}
          name='name'
        />
        <button className={style.btnSearch}>search</button>
        {error && <p className={style.error}>{error.name}</p>}
      </form>
    </div>
  )
}

export default SearchCountry
