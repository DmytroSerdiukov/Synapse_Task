import React from 'react'
import {Route, Routes} from 'react-router-dom'

import AuthMarkup from '../pages/Auth/markup'

const Router = () => {
    return <>
        <Routes>
            <Route path="/home"/>
            <Route path="/auth" element={<AuthMarkup />}/>
            <Route path="/register"/>
        </Routes>
    </>
}

export default Router