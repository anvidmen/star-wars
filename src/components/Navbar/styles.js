import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledNavbar = styled.nav`
    background-color: ${Colors.bgColor};
    height: 5rem
`

export const Container = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 3rem;
`

export const Img = styled.img`
    height: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;

    &:hover {
        filter: drop-shadow(1px 2px 10px ${Colors.hoverNav});
    };
`

export const Routes = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 4rem 0 0;

    & > a {
        display: flex;
        float: left;
        color:  ${Colors.fontColor};
        text-align: center;
        padding: 1rem 1rem;
        text-decoration: none;
        font: normal normal normal 24px Helvetica Neue;

        &:hover {
            color: ${Colors.hoverNav}
        }
    }
`
