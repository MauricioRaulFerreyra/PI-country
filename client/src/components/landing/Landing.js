import React from 'react'
import style from './landing.module.css'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h1 className={style.title}> Proyecto Countries</h1>
      </div>
      <div>
        <Link to='/home'>
          <button className={style.btnHome}>START</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
