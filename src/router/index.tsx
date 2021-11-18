import React from 'react'
import {Navigate} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import AuthMarkup from '../pages/Auth/markup'
import RegisterMarkup from '../pages/Register'
import HomeContainer from '../pages/Home/container'
import PopUpContainer from '../pages/PopUp/container'

const Router = () => {
    return <>
        <Routes>
            <Route path="/home" element={<HomeContainer />}/>
            <Route path="/auth" element={<AuthMarkup />} />
            <Route path="/register" element={<RegisterMarkup />} />
            <Route path="/items/:id" element={<PopUpContainer />} />
            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    </>
}

export default Router