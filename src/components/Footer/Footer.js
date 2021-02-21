import React from 'react'
import { Avatar, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import { Container, Information, Row, StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Information>
          <div>
            <h2>Star Wars</h2>
            <Information>
              <p>Ships</p>
            </Information>
          </div>
          <div>
            <h2>Contact</h2>
            <Information>
              <Link href='https://www.linkedin.com/in/juan-om'><Avatar><LinkedInIcon /></Avatar></Link>
              <Link href='https://github.com/anvidmen'><Avatar><GitHubIcon /></Avatar></Link>
              <Link href='https://twitter.com/JuanDaOm'><Avatar><TwitterIcon /></Avatar></Link>
            </Information>
          </div>
        </Information>
        <Row>
          Copyright © <Link href='https://anvidmen.netlify.app/'>Anvidmen</Link>{new Date().getFullYear()} | All Rights Reserved
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer
