import { useAppDispatch } from "../hooks";
import { LOGIN, LOGOUT, REGISTER } from "./types";

interface ILogin {
    email: string,
    password: string
}
