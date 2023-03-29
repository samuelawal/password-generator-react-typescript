import {useReducer} from 'react'
import { APP_INITIAL_STATE, SET_PASSWORD_LENGTH, SET_PASSWORD, SET_INCLUDE_LOWER_CASE, SET_INCLUDE_SYMBOLS, SET_INCLUDE_UPPER_CASE, SET_INCLUDE_NUMBERS } from '../constants'

import AppReducer from '../reducers/reducer'
export default function useApp() {
    const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);

    const handlePasswordLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: SET_PASSWORD_LENGTH, payload:{passwordLength: e.target.value}})
    }

    const handlePasswordCharacters = (password: string)=> {
        dispatch({type: SET_PASSWORD, payload: {password}})
    }
    const handleUpperCaseChange = () => {
        dispatch({type: SET_INCLUDE_UPPER_CASE})
    }
    const handleLowerCaseChange = () => {
        dispatch({type: SET_INCLUDE_LOWER_CASE})
    }

    const handleSymbolsChange = () => {
       
        dispatch({type: SET_INCLUDE_SYMBOLS})
    }
    const handleNumberChange = () => {
        dispatch({type: SET_INCLUDE_NUMBERS})
    }
    return {
        ...state, 
        handlePasswordLengthChange,
        handleUpperCaseChange,
        handleLowerCaseChange,
        handlePasswordCharacters,
        handleSymbolsChange,
        handleNumberChange
    }
}
