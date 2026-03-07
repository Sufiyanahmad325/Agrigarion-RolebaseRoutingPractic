import React from 'react'
import Login from '../pages/auth/Login'
import ProtectedRoute from './ProtectedRoute'
import AdminLayout from '../pages/admin/AdminLayout'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminDetails from '../pages/admin/AdminDetails'
import UserLayout from '../pages/user/UserLayout'
import UserDashboard from '../pages/user/UserDashboard'
import UserDetails from './UserDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<ProtectedRoute role="admin"><AdminLayout /></ProtectedRoute>} >
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="adminDetails" element={<AdminDetails />} />
                </Route>
                <Route path="/user" element={<ProtectedRoute role="user"><UserLayout /></ProtectedRoute>} >
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="userDetails" element={<UserDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter