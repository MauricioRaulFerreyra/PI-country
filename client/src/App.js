//import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Home from './components/home/Home'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
      </BrowserRouter>
    </div>
  )
}

export default App
