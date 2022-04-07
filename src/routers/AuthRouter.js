import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
  return (
    
        <Routes>
            <Route exact path='auth/login' element={<LoginScreen />} />
            <Route exact path='auth/register' element={<RegisterScreen />} />
        </Routes>
    
  )
}
