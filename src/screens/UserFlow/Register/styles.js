import styled from 'styled-components'
import Colors from 'theme/Colors'

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.8) 0% 0% no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  overflow: hidden;
  max-width: 22rem;
  margin: 3rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  & > .classInput {
      margin-bottom: 1.69rem;
      position: relative;
  
      & > label {
        display: inline-block;
        margin-bottom: 5px;
      }
    }
`

export const StyleRedirect = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 0 0;

  & > a {
    text-decoration: none;
    color: ${Colors.darkOrange};
    margin: 0 0 0 0.2rem;
  };

  & > a:hover {
    color: ${Colors.darkBlue};
  }
`
