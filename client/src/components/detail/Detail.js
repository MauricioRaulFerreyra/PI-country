import React,{useEffect} from 'react'
import style from './detail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { filterById } from '../../actions/index'
import { useParams, useHistory } from 'react-router-dom'

function Detail () {
  const dispatch = useDispatch()
  const details = useSelector(state => state.details)
  console.log(details)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    dispatch(filterById(id))
  }, [dispatch])

  const handleAccept = () => {
    history.push('/home')
  }

  return (
    <>
      {details && (
        <div className={style.container}>

          <div className={style.containerCountry}>

            <div className={style.containerName}>
              <h3>{details.name}</h3>
            </div>

            <div className={style.containerImage}>
              <img src={details.image && details.image[0]} alt={details.name} />
            </div>

            <h3 className={style.containerId}>Id: {details.id}</h3>
            <h3 className={style.containerContinent}>
              Continent: {details.continent}
            </h3>
            <h3 className={style.containerSubregion}>
              Subregion: {details.subregion}
            </h3>
            <h3 className={style.containerCapital}>
              Capital: {details.capital}
            </h3>
            <h3 className={style.containerArea}>Area km2: {details.area}</h3>
            <h3 className={style.containerPopulation}>
              Population: {details.population}
            </h3>
            <a href={details.maps} target='_blank'>
              {' '}
              <button onClick={handleAccept} className={style.btnMaps}>
                google maps
              </button>{' '}
            </a>

          </div>

          <div className={style.containerActivity}>

            <button onClick={handleAccept} className={style.btnDetails}>
              accept
            </button>

            <div>
              <h3 className={style.activityTitle}>Activities</h3>
            </div>

            <div className={style.containerActivity1}>
              {details.activities &&
                details.activities.map((el, i) => (
                  <div
                    key={i}
                    className={
                      details.activities.length >= 2
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
              {details.activities && details.activities.length === 0 ? (
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
