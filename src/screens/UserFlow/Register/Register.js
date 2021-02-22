import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from 'components/units/Input/Input'
import AsyncButton from 'components/units/AsyncButton/AsyncButton'
import { Container, Form, StyleRedirect } from './styles'
import Body from 'components/Body/Body'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase())
const validatePassword = (password) => PASSWORD_REGEX.test(password)

const users = [
  {
    email: 'juan@mail.com',
    password: 'Juan1992'
  }
]

const registerUser = (email, password) => {
  const newUsers = []
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    if (user.email === email) console.error('this user already exists')
    else {
      newUsers.push(email, password)
      localStorage.setItem('travelfreedom', 'HE ENTRADO!!!!')
      console.log(`The user ${email} has been successfully registered`)
    }
  }
}

const Register = ({ retrieveUser }) => {
  const [error, setError] = useState('')
  const [animatedState, setAnimatedState] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPassError, setIsPassError] = useState(false)

  const handleEmailChange = (value) => {
    setEmail(value)
    const isEmail = validateEmail(value)
    setIsEmailError(!isEmail)
  }

  const handlePasswordChange = (value) => {
    setPassword(value)
    const isPass = validatePassword(value)
    setIsPassError(!isPass)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setAnimatedState(true)
    setIsDisabled(true)
    setIsLoading(true)
    setTimeout(() => {
      setAnimatedState(false)
      setIsDisabled(false)
      setIsLoading(false)
    }, 2000)

    try {
      registerUser(email, password, (error, token) => {
        if (error) return setError(error.message)
        retrieveUser(token)
      })
    } catch ({ message }) {
      setError(message)
    }
  }

  return (
    <Body title='Sign up'>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div className='classInput'>
            <label>Name</label>
            <Input
              type='text'
              placeholder='Enter your name'
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              id='nameId'
              name='name'
              error={isPassError}
              errorText='The password to contain more than 6 characters and a uppercase letter'
              disabled={disabled}
              minLength={6}
            />
          </div>
          <div className='classInput'>
            <label>Surname</label>
            <Input
              type='surname'
              placeholder='Enter your surname'
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              id='surnameId'
              name='surname'
              error={isPassError}
              errorText='The password to contain more than 6 characters and a uppercase letter'
              disabled={disabled}
              minLength={6}
            />
          </div>
          <div className='classInput'>
            <label>Email</label>
            <Input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              id='emailId'
              name='email'
              error={isEmailError}
              errorText='Enter a valid email address...'
              disabled={disabled}
            />
          </div>
          <div className='classInput'>
            <label>Password</label>
            <Input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              id='passwordId'
              name='password'
              error={isPassError}
              errorText='The password to contain more than 6 characters and a uppercase letter'
              disabled={disabled}
              minLength={6}
            />
          </div>
          <AsyncButton
            text='Sign up'
            loadingText
            iconPosition='left'
            type='submit'
            className='orangeGradient'
            textStyles={{ marginLeft: 10 }}
            isLoading={isLoading}
            animated={animatedState}
            disabled={disabled}
          />
          <StyleRedirect>
            Have an account? <Link to='/login'>Log in</Link>
          </StyleRedirect>
        </Form>
      </Container>
    </Body>
  )
}

export default Register
