import styled from 'styled-components';

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

export default function Logo() {
    return (
        <LogoConatiner>
            <img src="src\assets\lg.png" alt="logo da hubusca" />
        </LogoConatiner>
    )
}