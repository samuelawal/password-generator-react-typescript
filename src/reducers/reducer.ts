import { APP_INITIAL_STATE, SET_INCLUDE_LOWER_CASE, SET_PASSWORD, SET_PASSWORD_LENGTH } from "../constants";
import { PasswordState } from "../constants/types";
interface Action {
    type: string,
    payload?: any,
}

function AppReducer(state: PasswordState, action: Action) {
    switch (action.type) {
        case SET_PASSWORD : 
            return {
                ...state,
                password: action.payload.password
        };
        case SET_PASSWORD_LENGTH:
            return {
                ...state,
                passwordLength: action.payload.passwordLength
            };
        case SET_INCLUDE_LOWER_CASE:
            return {
                ...state,
                includeLowercase: action.payload.value
            }
            default: return state
    }
}
export default AppReducer