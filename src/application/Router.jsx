import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import PlantsearchPage from '../pages/PlantsearchPage'

function AppRouter () {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/search' element={<PlantsearchPage/>}/>
        </Routes>
    )
}

export default AppRouter;