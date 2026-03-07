import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminDashboard() {
    return (
        <>
            <div>AdminDashboard</div>
            <NavLink to="/admin/adminDetails">Dashboard</NavLink>
        </>
    )
}

export default AdminDashboard