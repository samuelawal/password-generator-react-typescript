import React from 'react'
import { PasswordCharacterContainer } from './styles/homepageStyle'



interface Props{
    handlePasswordLengthChange: (passwordLength:  React.ChangeEvent<HTMLInputElement>) => void,
    passwordLength: string
    rangeValue: string
}
const PasswordCharacterLength = ({handlePasswordLengthChange, passwordLength, rangeValue}: Props) => {

    const backgroundSize: string = `${rangeValue}%, 100%`
  return (
    <PasswordCharacterContainer>
        <div className='password-character-length-header'>
        <label htmlFor="passwordLengthSlider">Character Length</label>
        <span className='password-length'>{passwordLength}</span>
        </div>
        <div className='slider-container'>      
        <div>
            <input type="range" min="0" max="20" value={passwordLength} onChange={handlePasswordLengthChange} className='char-length-slider' style={{backgroundSize: backgroundSize}} required/>
        </div>
        </div>
    </PasswordCharacterContainer>
  )
}

export default PasswordCharacterLength