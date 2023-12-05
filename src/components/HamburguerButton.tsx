import { styled } from "styled-components"

const MenuHamburquer = styled.button`
    border: none;
    list-style: none;
    background-color: #3e4b51;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    

    span{
        position: relative;
        display: block;
        background: #ffffff;
        width: 18px;
        height: 1.25px;

        &:before,
        &:after { 
            background: #ffffff;
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
        }

        &:before{
            top: -5px;
        }

        &:after{
            bottom: -5px;
        }
    }

    &:hover{
        opacity: 0.95;
        transform: scale(1.2); 
        box-shadow: 0 5px 15px rgba(0,0,0,0.6);
    }
`

interface HamburguerButtonProps {
    handleClick: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export function HamburguerButton({handleClick}: HamburguerButtonProps) {
    return (
        <MenuHamburquer onClick={()=>handleClick(true)}>
            <span></span>
        </MenuHamburquer>
    )
}