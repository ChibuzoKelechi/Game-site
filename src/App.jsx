import './App.css'
import Home from './Pages/HomePage'
import StorePage from './Pages/Store'
import GameCard from './Components/GameApiCard'
import ErrorPage from './Pages/Error'
import GamerProfile from './Components/Profile'
import { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import GamerForm from './Components/GamerForm'
import Navbar from './Components/NavBar'
export const AppContext = createContext()

function App() {

  const [game, setGame] = useState('Counter Strike')
  const [profile, setProfile] = useState({})

  return (
    <section className='min-h-screen'>
      <AppContext.Provider value={{
         game, setGame,
         profile, setProfile
      }}>
        
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<StorePage />} />
            <Route path='/game-info' element={<GameCard />} />
            <Route path='/formpage' element={<GamerForm />} />
            <Route path='/gamer-profile' element={<GamerProfile />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </section>
  )
}

export default App
