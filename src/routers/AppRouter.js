import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MatriculateScreen } from '../components/matriculate/MatriculateScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path='/' element={ <MatriculateScreen /> } />

            <Route path='/*' element={ <AuthRouter /> } />

        </Routes>
    </BrowserRouter>
  )
}
