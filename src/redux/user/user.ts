import { LOGIN, LOGOUT, REGISTER, SET_USER } from "./types"

interface IState {
    authStatus: boolean,
    user: string
}

interface IAction {
    type: string,
    payload?: any
}

let initState = {
    authStatus: false,
    user: ''
}


const userReducer = (state: IState = initState, action: IAction) => {
    switch (action.type) {
        case LOGIN: {
            return {...state, authStatus: true}
        }
        case REGISTER: {
            return {...state, authStatus: true}
        }
        case LOGOUT: {
            return state
        }
        case SET_USER: {
            return {...state, user: action.payload}
        }
        default:
            return state
    }
}

export default userReducer