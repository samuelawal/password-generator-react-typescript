import React from 'react'
import { PasswordCharacterContainer } from './styles/homepageStyle'


interface Props{
    handlePasswordLengthChange: (passwordLength:  React.ChangeEvent<HTMLInputElement>) => void,
    passwordLength: string
}
const PasswordCharacterLength = ({handlePasswordLengthChange, passwordLength}: Props) => {

  return (
    <PasswordCharacterContainer>
        <div className='password-character-length-header'>
        <label htmlFor="passwordLengthSlider">Character Length</label>
        <span className='password-length'>{passwordLength}</span>
        </div>
        <div className='slider-container'>      
        <div>
            <input type="range" min="0" max="20" value={passwordLength} onChange={handlePasswordLengthChange} required/>
        </div>
        </div>
    </PasswordCharacterContainer>
  )
}

export default PasswordCharacterLength