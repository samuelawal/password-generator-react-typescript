import React from 'react'


interface PasswordOptionsProps {
    includeLowercase: boolean,
    includeUppercase: boolean,
    includeSymbols: boolean,
    includeNumbers: boolean,
    handleUpperCaseChange: () => void,
    handleLowerCaseChange: () => void,
    handleSymbolsChange: () => void,
    handleNumberChange: () => void,


}

const OptionsPassword = ({includeLowercase, includeNumbers, includeUppercase, includeSymbols, handleUpperCaseChange, handleLowerCaseChange, handleNumberChange, handleSymbolsChange}: PasswordOptionsProps) => {
  return (
    <div className='password-options-container'>
        <label className='check-container'>
            Include Uppercase Letters
            <input type='checkbox' checked={includeUppercase} onChange={handleUpperCaseChange} required/>
            <span className='checkmark'></span>
        </label>

        <label className='check-container'>
            Include Lowercase Letters
            <input type='checkbox' checked={includeLowercase} onChange={handleLowerCaseChange} required/>
            <span className='checkmark'></span>
        </label>

        <label className='check-container'>
            Include Numbers
            <input type='checkbox' checked={includeNumbers} onChange={handleNumberChange} required/>
            <span className='checkmark'></span>
        </label>

        <label className='check-container'>
            Include Symbols
            <input type='checkbox' checked={includeSymbols} onChange={handleSymbolsChange} required/>
            <span className='checkmark'></span>
        </label>
    </div>
  )
}

export default OptionsPassword