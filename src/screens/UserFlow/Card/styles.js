import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: ${Colors.fontColor} 0% 0% no-repeat padding-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 1px 3px 6px 3px #00000039;
    overflow: hidden;
    max-width: 22rem;
    margin: 1rem;
    padding: 1rem;    
    
    @media only screen and (max-width: 667px) {
        max-width: 20rem;
        margin: 1rem;
    }
`

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > h1{
        font: normal bold normal 22px Helvetica Neue;
    }
    & > div {
        margin: 0.2rem;
        font: normal normal normal 18px Helvetica Neue
    }
`
