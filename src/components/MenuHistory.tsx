import styled, { css } from "styled-components"
import { IoClose } from "react-icons/io5"
import { HistoryState } from "../store/modules/history/historySlice";
import { useStoreSelector } from "../hooks/hooks";
import { HistoryCard } from "./HistoryCard";

interface ContainerProps {
    $isVisible: boolean;
}

const Container = styled.div<ContainerProps>`
    display: none;
    position: fixed;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100dvh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    overflow-x: scroll;

   
    background-color: #525c5a;
   
    pointer-events: none;
    transform: translateX(2000px);

    transition: 1.5s;


    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        width: 100%;
        height: calc(100% - 40px);
        
        gap: 10px;

    }

    ${({ $isVisible }) => $isVisible && css`
        display: flex;
        pointer-events: auto;
        transform: translateX(0px);
        overflow-y: scroll;
        overflow-x: hidden;
    `}
`

const Title = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    padding: 10px;
    margin-bottom: 10px;
`
const CloseIcon = styled(IoClose)`
    position: absolute;
    color: #111111;
    top: 8px;
    right: 18px;

`

interface MenuHistoryProps {
    menuIsVisible: boolean;
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


export function MenuHistory({ menuIsVisible, setMenuIsVisible }: MenuHistoryProps) {
    const historyc: Array<HistoryState> = useStoreSelector((state) => state.history)

    return (
        <Container $isVisible={menuIsVisible}>
            <CloseIcon size={55} onClick={() => setMenuIsVisible(false)} />
            <ul>
                <Title>Histórico</Title>
            {
                historyc.map((user, index: number)=><HistoryCard key={index} name={user.search} setMenu={setMenuIsVisible}/>)
            }

            </ul>
        </Container >
    )
}