import styled, { keyframes } from "styled-components"

const LoaderAnimated = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  .loader-wrap {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #333;
        margin: 0 20px;
        animation: ${LoaderAnimated} 1.5s infinite ease-in-out;
        animation-delay: calc(0.5s);
    }

    .loader-wrap:nth-child(2) {
        animation-delay: calc(0.5s + 0.25s);
    }

    .loader-wrap:nth-child(3) {
        animation-delay: calc(0.5s + 0.5s);
    }
`



export function Loader() {

    return (
        <LoaderContainer>
            <div className="loader-wrap"></div>
            <div className="loader-wrap"></div>
            <div className="loader-wrap"></div>
        </LoaderContainer>
    )
}