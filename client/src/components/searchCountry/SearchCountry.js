import React from 'react'
import style from './searchCountry.module.css'
import { connect } from 'react-redux'
import { useState } from 'react'
import { searchByName } from './../../actions/index'

function SearchCountry({ setCurrentPage, searchByName, copyCountries }) {
  const [name, setName] = useState('')

  const [error, setError] = useState({ name: '' })

  const validate = value => {
    let errors = {}
    const findCountry = copyCountries.find(el =>
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
      searchByName(name)
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

function mapDispatchToProps(dispatch) {
  return {
    searchByName: name => dispatch(searchByName(name))
  }
}

function mapStateToProps(state) {
  return {
    copyCountries: state.copyCountries
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCountry)
