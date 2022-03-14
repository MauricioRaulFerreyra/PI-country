import React from 'react'
import style from './createActivities.module.css'
import { Link } from 'react-router-dom'

function CreateActivities () {
  return (
    <div className={style.containerBtnCreateAct}>
      <Link to='/createActivity'>
        <button className={style.btnCreateAct}>Create activity</button>
      </Link>
    </div>
  )
}

export default CreateActivities
