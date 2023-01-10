
import React from 'react'
import RoutesPage from './Routes/RoutesPage'
import { Route, Routes } from 'react-router'
import LandingPage from './components/LandingPage/LandingPage'

const App = () => {
  return (

    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <RoutesPage />
    </React.Fragment>
  )
}

export default App