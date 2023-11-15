import './App.css'
import Home from './Pages/HomePage'
import StorePage from './Pages/Store'
import GameCard from './Components/GameApiCard'
import ErrorPage from './Pages/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <section className='min-h-screen'>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<StorePage/>}/>
          <Route path='/game-info' element={<GameCard/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
      
    </section>
  )
}

export default App
