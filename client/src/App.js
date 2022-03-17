//import './App.css'
import { Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'
import Detail from './components/detail/Detail'
import PageCreate from './components/createActivity/PageCreate'

function App () {
  return (
    <div>
      <Route exact path={'/'} component={Landing} />
      {/* <Route exact path='/home' component={Home} /> */}
      <Route exact path={'/home'} render={() => <Home />} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/createActivity' component={PageCreate} />
    </div>
  )
}

export default App
