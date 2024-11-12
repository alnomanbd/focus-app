import React from 'react'
import { Navigate } from 'react-router-dom'

const Profile = ({onLogout}) => {
    const handleLogOut = () => {
        onLogout()
        Navigate("/login")
    }
  return (
    <div>
        <h1>Profile</h1>
        <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Profile