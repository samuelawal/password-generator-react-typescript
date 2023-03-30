import { PasswordState } from "./types";
export const APP_INITIAL_STATE: PasswordState = {
  loading: true,
  includeLowercase: true,
  includeUppercase: false,
  includeNumbers: true,
  includeSymbols: false,
  password: "",
  lowercaseCharacters: "abcdefghijklmnopqrstuvwxyz",
  uppercaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/",
  passwordLength: 10,
};
export const SET_PASSWORD: string = "set_password";
export const SET_INCLUDE_LOWER_CASE: string = "set_include_lower_case";
export const SET_INCLUDE_UPPER_CASE: string = "set_include_upper_case";
export const SET_INCLUDE_NUMBERS: string = "set_include_numbers";
export const SET_INCLUDE_SYMBOLS: string = "set_include_symbols";
export const SET_PASSWORD_LENGTH: string = "set_password_length";
