import { LOGIN, LOGOUT, REGISTER } from "./types"

interface IState {
    authStatus: boolean
}

interface IAction {
    type: string,
    payload?: any
}

let initState = {
    authStatus: false
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
        default:
            return state
    }
}

export default userReducer