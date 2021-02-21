import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Img, Routes, StyledNavbar } from './styles'
import logo from 'assets/images/logo.png'

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Link to='/'><Img src={logo} alt='icon' /></Link>
        <Routes>
          <Link to='/starships'>Starships</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </Routes>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
