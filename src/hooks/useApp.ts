import { useReducer } from "react";

import {
  APP_INITIAL_STATE,
  SET_PASSWORD_LENGTH,
  SET_PASSWORD,
  SET_INCLUDE_LOWER_CASE,
  SET_INCLUDE_SYMBOLS,
  SET_INCLUDE_UPPER_CASE,
  SET_INCLUDE_NUMBERS,
} from "../constants";

import AppReducer from "../reducers/reducer";
export default function useApp() {
  const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);

  const handlePasswordLengthChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: SET_PASSWORD_LENGTH,
      payload: { passwordLength: e.target.value },
    });
  };

  const handlePasswordCharacters = (password: string) => {
    dispatch({ type: SET_PASSWORD, payload: { password } });
  };
  const handleUpperCaseChange = () => {
    dispatch({ type: SET_INCLUDE_UPPER_CASE });
  };
  const handleLowerCaseChange = () => {
    dispatch({ type: SET_INCLUDE_LOWER_CASE });
  };

  const generatePassword = () => {
    const { passwordLength } = state;
   
    let charset: string = "";
    if (state.includeLowercase) charset += state.lowercaseCharacters;
    if (state.includeUppercase) charset += state.uppercaseCharacters;
    if (state.includeNumbers) charset += state.numbers;
    if (state.includeSymbols) charset += state.symbols;
    let myPassword: string = ''
    for (let i = 0; i < passwordLength; i++) {
      myPassword += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
      console.log(state.password);
    }
    dispatch({ type: SET_PASSWORD, payload: { password: myPassword } });
  };
  const handleSymbolsChange = () => {
    dispatch({ type: SET_INCLUDE_SYMBOLS });
  };
  const handleNumberChange = () => {
    dispatch({ type: SET_INCLUDE_NUMBERS });
  };
  return {
    ...state,
    handlePasswordLengthChange,
    handleUpperCaseChange,
    handleLowerCaseChange,
    handlePasswordCharacters,
    handleSymbolsChange,
    handleNumberChange,
    generatePassword,
  };
}
