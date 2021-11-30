import { configureStore } from '@reduxjs/toolkit'
import { reducer as reducerForm } from 'redux-form';

import userReducer from './user/user'

export const store = configureStore({
    reducer: {
        user: userReducer,
        form: reducerForm
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch