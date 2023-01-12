
import React from 'react'
import RoutesPage from './Routes/RoutesPage'
import { Route, Routes } from 'react-router'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Sign/Login'
import Admin from './components/Admin/AdminDashboard'
import "bootstrap/dist/css/bootstrap.min.css"
// import AdminDashboard from './components/Admin/AdminDashboard'
const App = () => {
  return (

    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      <RoutesPage />
    </React.Fragment>
  )
}

export default App