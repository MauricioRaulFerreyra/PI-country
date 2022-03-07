import React, { useEffect } from 'react'
import style from './detail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { filterById } from '../../actions'
import { useHistory, useParams } from 'react-router-dom'

function Detail () {
  const dispatch = useDispatch()
  let country = useSelector(state => state.details)
  console.log(country)

  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    dispatch(filterById(id))
  }, [dispatch])

  const handleBack = () => {
    history.push('/home')
  }

  const handleMaps = () => {}

  console.log(country.name)

  return (
    <>
      {country && (
        <div className={style.container}>
          <div className={style.containerCountry}>
            <div className={style.containerName}>
              <h3>{country.name}</h3>
            </div>
            <div className={style.containerImage}>
              <img src={country.image && country.image[0]} alt={country.name} />
            </div>
            <h3 className={style.containerId}>Id: {country.id}</h3>
            <h3 className={style.containerContinent}>
              Continent: {country.continent}
            </h3>
            <h3 className={style.containerSubregion}>
              Subregion: {country.subregion}
            </h3>
            <h3 className={style.containerCapital}>
              Capital: {country.capital}
            </h3>
            <h3 className={style.containerArea}>Area km2: {country.area}</h3>
            <h3 className={style.containerPopulation}>
              Population: {country.population}
            </h3>
          </div>
          <div className={style.containerActivity}>
            <button onClick={handleBack} className={style.btnDetails}>
              Back
            </button>
            <div>
              <h3 className={style.activityTitle}>Activities</h3>
            </div>
            <div className={style.containerActivity1}>
              {country.activities &&
                country.activities.map((el, i) => (
                  <div
                    key={i}
                    className={
                      country.activities.length >= 2
                        ? style.activities
                        : style.act
                    }
                  >
                    <h4 className={style.title}>{el.name.toUpperCase()}</h4>
                    <h4>
                      <span className={style.span}>Difficulty:</span>{' '}
                      {el.difficulty}
                    </h4>
                    <h4>
                      <span className={style.span}>Duration:</span>{' '}
                      {el.duration}
                    </h4>
                    <h4>
                      <span className={style.span}>Season:</span> {el.season}
                    </h4>
                  </div>
                ))}
              {country.activities && country.activities.length === 0 ? (
                <div className={style.noActivity}>No Activities</div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail
