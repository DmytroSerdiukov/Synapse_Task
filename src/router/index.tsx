import React from 'react'
import {Navigate} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import AuthMarkup from '../pages/Auth/markup'
import RegisterMarkup from '../pages/Register'
import HomeContainer from '../pages/Home/container'
import PopUpContainer from '../pages/PopUp/container'
import WelcomeScreen from '../pages/WelcomeScreen'

const Router = () => {
    return <>
        <Routes>
            <Route path="/home" element={<HomeContainer />}/>
            <Route path="/auth" element={<AuthMarkup />} />
            <Route path="/register" element={<RegisterMarkup />} />
            <Route path="/items/:id" element={<PopUpContainer animate={true} />} />
            <Route path="/welcome" element={<WelcomeScreen />} />

            <Route path="/" element={<Navigate to="/welcome" />} />
        </Routes>
    </>
}

export default Router