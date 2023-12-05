import styled from "styled-components"

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    min-width: 320px;
    margin: 0 18px;
    background-color: #e7a6a6;
    border: 1px solid #ce4f4f;
    border-radius: 8px;

    h2{
        color: #ec1010;
        font-size: 1.6rem;
        font-weight: 600;
    }
`



interface ErrorMessageProps {
    title: string,
}


export function ErrorMessage({title}:ErrorMessageProps) {
    return (
        <ErrorContainer>
            <h2>{title}</h2>
        </ErrorContainer>
    )
}