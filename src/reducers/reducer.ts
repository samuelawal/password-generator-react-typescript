import {  SET_INCLUDE_LOWER_CASE, SET_INCLUDE_NUMBERS, SET_INCLUDE_SYMBOLS, SET_INCLUDE_UPPER_CASE, SET_PASSWORD, SET_PASSWORD_LENGTH } from "../constants";
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
                includeLowercase: !state.includeLowercase
            }
            case SET_INCLUDE_UPPER_CASE:
                return {
                    ...state,
                    includeUppercase: !state.includeUppercase
                }
                case SET_INCLUDE_SYMBOLS:
                    return {
                        ...state,
                        includeSymbols: !state.includeSymbols
                    }
                    case SET_INCLUDE_NUMBERS:
                        return {
                            ...state,
                            includeNumbers: !state.includeNumbers
                        }
            default: return state
    }
}
export default AppReducer