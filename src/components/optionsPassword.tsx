import React from 'react'
import useApp from '../hooks/useApp'

const OptionsPassword = () => {
    const {includeLowercase, includeNumbers, includeSymbols, includeUppercase, handleLowerCaseChange, handleUpperCaseChange, handleSymbolsChange, handleNumberChange} = useApp()
    // const setUppercase = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     handleUpperCaseChange(e.target.checked)
    // }
    // const setLowerCase = (e: React.ChangeEvent<HTMLInputElement>)=> {
    //     handleLowerCaseChange(e.target.checked)
    // }
 
    // const setSymbols = (e: React.ChangeEvent<HTMLInputElement>)=> {
    //     handleSymbolsChange(e.target.checked)
    // }
    // const setNumbers = (e: React.ChangeEvent<HTMLInputElement>)=> {
    //     handleNumberChange(e.target.checked)
    // }
  return (
    <div className='password-options-container'>
        <label className='check-container'>
            Include Uppercase Letters
            <input type='checkbox' checked={includeUppercase} onChange={handleUpperCaseChange}/>
            <span className='checkmark'></span>
        </label>

        <label className='check-container'>
            Include Lowercase Letters
            <input type='checkbox' checked={includeLowercase} onChange={handleLowerCaseChange}/>
            <span className='checkmark'></span>
        </label>

        <label className='check-container'>
            Include Numbers
            <input type='checkbox' checked={includeNumbers} onChange={handleNumberChange}/>
            <span className='checkmark'></span>
        </label>

        <label className='check-container'>
            Include Symbols
            <input type='checkbox' checked={includeSymbols} onChange={handleSymbolsChange}/>
            <span className='checkmark'></span>
        </label>
    </div>
  )
}

export default OptionsPassword