import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const { user } = useContext(DataContext)
    if (user === null) {
        return <Navigate to="/login" replace />
    }
    return <Outlet />;
}

export default PrivateRoute