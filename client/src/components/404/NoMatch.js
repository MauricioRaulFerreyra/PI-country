import style from './NoMatch.module.css'
import { useHistory } from 'react-router-dom'

export default function NoMatch () {
  const history = useHistory()

  const handleButtonPress = () => {
    history.push('/home')
  }

  return (
    <div className={style.nomatch}>
      <h1 style={{ fontSize: '6rem' }}>404</h1>
      <h3>Page not found</h3>
      <button className={style.btn} onClick={handleButtonPress}>
        Back Button
      </button>
    </div>
  )
}
