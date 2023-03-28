import React from 'react'


interface Props{
    handlePasswordLengthChange: (passwordLength:  React.ChangeEvent<HTMLInputElement>) => void,
    passwordLength: string
}
const PasswordLength = ({handlePasswordLengthChange, passwordLength}: Props) => {
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handlePasswordLengthChange(e)
    }
  return (
        <div>
            <input type="range" min="0" max="20" value={passwordLength} onChange={handleChange}/>
        </div>
  )
}

export default PasswordLength