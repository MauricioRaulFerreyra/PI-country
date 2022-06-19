import style from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'
import Detail from './components/detail/Detail'
import PageCreate from './components/createActivity/PageCreate'
import { useMemo, useState } from 'react'
import FilterContext from './components/context/FilterContext'
import NoMatch from './components/404/NoMatch'

function App () {
  const [filter, setFilter] = useState(false)
  const value = useMemo(() => ({ filter, setFilter }), [filter])

  return (
    <div className={style.app}>
      <FilterContext.Provider value={value}>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact path='/detail/:id'>
            <Detail />
          </Route>
          <Route exact path='/createActivity'>
            <PageCreate />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </FilterContext.Provider>
    </div>
  )
}

export default App
