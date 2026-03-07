import React from 'react'
import { NavLink } from 'react-router-dom'

function UserDashboard() {
  return (
    <div>
        <div>UserDashboard</div>
        <NavLink to="/user/userDetails">User Details</NavLink>
    </div>
  )
}

export default UserDashboard