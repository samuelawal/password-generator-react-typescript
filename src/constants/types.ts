export interface PasswordState {
    loading: boolean,
    includeLowercase: boolean,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean,
    password: string | null,
    lowercaseCharacters: string,
    uppercaseCharacters: string,
    numbers: number | string,
    symbols: string | null,
    passwordLength: string | number | null,
    rangeValue: string 
}