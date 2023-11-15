import './App.css'
import Home from './Pages/HomePage'
import StorePage from './Pages/Store'
import GameCard from './Components/GameApiCard'
import ErrorPage from './Pages/Error'
import { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
export const AppContext = createContext()

function App() {

  const [game, setGame] = useState('Counter Strike')
  
  return (
    <section className='min-h-screen'>
     <AppContext.Provider value={ {game, setGame} }>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<StorePage/>}/>
          <Route path='/game-info' element={<GameCard/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </section>
  )
}

export default App
