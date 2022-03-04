//import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'
import Details from './components/detail/Detail'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/detail/:id' component={Details} />
      </BrowserRouter>
    </div>
  )
}

export default App
