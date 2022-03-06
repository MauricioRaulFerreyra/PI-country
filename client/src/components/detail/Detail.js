import React, { useEffect } from 'react'
import style from './detail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { filterById } from '../../actions'
import { useHistory, useParams, Link } from 'react-router-dom'

function Detail () {
  const dispatch = useDispatch()
  let country = useSelector(state => state.details)
  console.log(country)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    dispatch(filterById(id))
  }, [])

  const handleAccept = () => {
    history.push('/home')
  }

  return (
    <>
      {country && (
        <div className={style.container}>
          <div className={style.containerBtn}>
            <Link to='/home'>
              <button className={style.btn}>HOME</button>
            </Link>
          </div>
          <div className={style.containerDetail}>
            <div className={style.containerName}>
              <h3>{country.name}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail
