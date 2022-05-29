import React, { useEffect, useState } from 'react'
import style from './pageCreate.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, postActivity } from '../../actions'
import stylesLoading from '../home/loading.module.css'
import { useHistory } from 'react-router-dom'
import Modal from './modal'

const validate = value => {
  const errors = {}

  if (!value.name) {
    errors.name = 'Required field name'
  } else if (!value.difficulty) {
    errors.difficulty = 'Required field difficulty'
  } else if (!value.duration) {
    errors.duration = 'Required field duration'
  } else if (!value.season) {
    errors.season = 'Required field season'
  } else if (value.idCountry.length === 0) {
    errors.idCountry = 'Required field country'
  }

  return errors
}

function PageCreate() {
  const imagen =
    'https://imagenes.elpais.com/resizer/poLxVzmwPheHVMXrqCcigjqj9BE=/414x311/filters:focal(436x272:446x282)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GGWILMLEOATEMMU4WZDAG32W4Y.jpg'

  const history = useHistory()

  const [modal, setModal] = useState(false)

  const [error, setError] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    idCountry: []
  })
  const [data, setData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    idCountry: []
  })

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const activity = useSelector(state => state.activities)
  //console.log(activity)
  let aux = activity.map(el => el.name)
  //console.log(aux)

  useEffect(() => {
    dispatch(getAll())
  }, [])

  const handleInput = e => {
    console.log(data.name)
    if (aux.includes(data.name)) {
      alert('this activity already exists')
      data.name = ''
      return
    }
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    console.log(data.idCountry)
    //console.log(data.name)
  }

  const handleBlur = e => {
    handleInput(e)
    setError(validate(data))
  }

  const handleDifficulty = e => {
    setData({
      ...data,
      difficulty: e.target.value
    })
  }
  const handleSeason = e => {
    setData({
      ...data,
      season: e.target.value
    })
  }
  const handleSelectCountries = e => {
    if (!e.target.value) return
    if (data.idCountry.length >= 2) {
      alert('You cant only choose max 2 country')
      return
    }
    if (
      e.target.value === activity.find(el => el.idCountry === e.target.value)
    ) {
      alert('ya se eligio ese pais')
      return
    }
    if (e.target.value === data.idCountry.find(el => el === e.target.value)) {
      alert("You can't choose the same country")
      return
    }
    setData({
      ...data,
      idCountry: [...data.idCountry, e.target.value]
    })
    e.target.value = 'default'
  }

  const handleDelete = idCountry => {
    data.idCountry &&
      setData({
        ...data,
        idCountry: data.idCountry.filter(id => id !== idCountry)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setError(validate(data))
    if (Object.keys(validate(data)).length === 0) {
      dispatch(postActivity(data))
      setData({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        idCountry: []
      })
      setModal(true)
    }
  }
  const handleBackPage = e => {
    history.push('/home')
  }

  return (
    <div className={style.contenedorPrincipal}>
      {modal && <Modal setModal={setModal} />}

      <div className={style.containerBtns}>
        <button onClick={handleBackPage} className={style.containerFormBtn}>
          Back
        </button>
      </div>

      <div className={style.container}>
        {countries.length > 0 ? (
          <>
            <div className={style.containerImg}>
              <img className={style.imagen} src={imagen} alt='imagen' />
            </div>
            <div className={style.containerForm}>
              <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.containerFormAll}>
                  <label className={style.labelActivity}>Name Activity: </label>
                  <input
                    type='text'
                    name='name'
                    className={style.inputActivity}
                    value={data.name}
                    onChange={handleInput}
                    onBlur={handleBlur}
                  />
                  {error.name && (
                    <p className={style.errorName}>{error.name}</p>
                  )}
                </div>
                <div className={style.containerFormAll}>
                  <label className={style.labelActivity}>Difficulty: </label>
                  <select
                    type='text'
                    name='difficulty'
                    className={style.selectActivity}
                    onChange={handleDifficulty}
                    onBlur={handleBlur}
                  >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>
                  {error.difficulty && (
                    <p className={style.errorDifficulty}>{error.difficulty}</p>
                  )}
                </div>
                <div className={style.containerFormAll}>
                  <label className={style.labelActivity}>Duration: </label>
                  <input
                    type='text'
                    name='duration'
                    className={style.inputActivity1}
                    value={data.duration}
                    onChange={handleInput}
                    onBlur={handleBlur}
                  />
                  {error.duration && (
                    <p className={style.errorDuration}>{error.duration}</p>
                  )}
                </div>
                <div className={style.containerFormAll}>
                  <label className={style.labelActivity}>Season: </label>
                  <select
                    className={style.selectActivity1}
                    onChange={handleSeason}
                    onBlur={handleBlur}
                  >
                    <option value='Verano'>Summer</option>
                    <option value='Otoño'>Autumn</option>
                    <option value='Invierno'>Winter</option>
                    <option value='Primavera'>Spring</option>
                  </select>
                  {error.season && (
                    <p className={style.errorSeason}>{error.season}</p>
                  )}
                </div>
                <div className={style.containerFormAll}>
                  <label className={style.labelActivity}>
                    Select countries
                  </label>
                  <select
                    className={style.selectActivity2}
                    onChange={handleSelectCountries}
                    onBlur={handleBlur}
                  >
                    {countries.map((country, i) => (
                      <option key={i} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {error.idCountry && (
                    <p className={style.errorId}>{error.idCountry}</p>
                  )}
                </div>
                <div className={style.containerFormAll}>
                  <button className={style.containerFormBtn}>Create</button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className={stylesLoading.ldsSpinner}>
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
        )}
      </div>
      <div className={style.containerCountriesSelect}>
        {data.idCountry &&
          data.idCountry.map((country, i) => (
            <div className={style.containerCountriesSelectOne} key={i}>
              <button
                className={style.btnDelete}
                onClick={() => handleDelete(country)}
              >
                X
              </button>
              <h4>{country}</h4>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PageCreate
