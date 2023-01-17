import React from 'react'
import './AdminDashbord.css'
import MainDash from './MainDash/MainDash'
function AdminDashboard() {
  return (
    <div className='AdminDashboard'>
      <div className='AdminGlass'>
        <MainDash/>
      </div>
    </div>
  )
}

export default AdminDashboard
