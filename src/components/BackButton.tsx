import styled from "styled-components"

import { useNavigate } from "react-router-dom";
import BackIcon from "./BackIcon";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: transparent;
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #617480;
`
interface BtnProps {
    router: string;
}


export function BackButton({ router }: BtnProps) {
    const navigate = useNavigate()

    const handleNavidate = () => {
        navigate(router)
    }

    return (
        <Button onClick={handleNavidate}>
            <BackIcon />
            voltar
        </Button>
    )
}