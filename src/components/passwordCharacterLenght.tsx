import React from 'react'
import { PasswordCharacterContainer } from './styles/homepageStyle'
import PasswordSlider from './paswwordSlider'
// import AppContext from '../context'
import useApp from "../hooks/useApp"

const PasswordCharacterLength = () => {
        const {handlePasswordLengthChange, passwordLength} = useApp()
  return (
    <PasswordCharacterContainer>
        <div className='password-character-length-header'>
        <label htmlFor="passwordLengthSlider">Character Length</label>
        <span className='password-length'>{passwordLength}</span>
        </div>
        <div className='slider-container'>
        <PasswordSlider {...{handlePasswordLengthChange, passwordLength}} />
        </div>
    </PasswordCharacterContainer>
  )
}

export default PasswordCharacterLength