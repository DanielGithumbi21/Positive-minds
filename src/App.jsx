
import React from 'react'
import RoutesPage from './Routes/RoutesPage'
import { Route, Routes } from 'react-router'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Sign/Login'
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from './components/Sign/SignUp'
const App = () => {
  return (

    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <RoutesPage />
    </React.Fragment>
  )
}

export default App