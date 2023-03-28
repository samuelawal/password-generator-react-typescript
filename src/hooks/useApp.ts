import {useReducer} from 'react'
import { APP_INITIAL_STATE, SET_PASSWORD_LENGTH } from '../constants'
import AppContext from '../context';
import AppReducer from '../reducers/reducer'
export default function useApp() {
    const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);

    const handlePasswordLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: SET_PASSWORD_LENGTH, payload:{passwordLength: e.target.value}})
    }
    return {
        ...state, 
        handlePasswordLengthChange,
    }
}
