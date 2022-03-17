import React from 'react'
import style from './paginated.module.css'

function Paginated ({ countries, pagination, countriesPage }) {
  let pageNumber = []

  for (let i = 1; i <= Math.ceil(countries / countriesPage); i++) {
    pageNumber.push(i)
  }

  let aux = 25

  return (
    <div>
      <ul className={style.lista}>
        {pageNumber &&
          pageNumber.map((p, i) => (
            <li key={i} className={style.li}>
              <button className={style.btn} onClick={() => pagination(p)}>
                {p}
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Paginated
