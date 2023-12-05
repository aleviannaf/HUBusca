import styled from 'styled-components';
import logo from '../assets/lg.png'

const LogoConatiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
       object-fit: cover;
        height: 100px;
        width: 225px;
    }
`

export function Logo() {
    return (
        <LogoConatiner>
            <img src={logo} alt="logo da hubusca" />
        </LogoConatiner>
    )
}