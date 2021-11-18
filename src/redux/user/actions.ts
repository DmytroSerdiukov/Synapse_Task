import { useAppDispatch } from "../hooks";
import { LOGIN, LOGOUT, REGISTER } from "./types";

interface ILogin {
    email: string,
    password: string
}

export const logout = () => useAppDispatch({type: LOGOUT})
export const login = ({email, password}: ILogin) => useAppDispatch({type: LOGIN, payload: {email, password}})
export const register = ({email, name, password}) => useAppDispatch({type: REGISTER, payload: {email, password}})