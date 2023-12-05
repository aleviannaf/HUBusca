import { useEffect } from "react";
import { HistoryState, historyAdded, setHistoric,  } from "../store/modules/history/historySlice";
import { useStoreDispatch, useStoreSelector } from "./hooks";

export function useLocalHistoric(){
    const dispatch = useStoreDispatch()
    const historic = useStoreSelector((state)=>state.history)

    useEffect(() => {
        if ((historic.length > 0 ) && window.localStorage) {
            localStorage.setItem('historic-search', JSON.stringify(historic));
        }
    }, [dispatch, historic]);

    const updateLocalHistoric = (newValue: string): void => {
        dispatch(historyAdded(newValue));
    }

    const setLocalHistoric = (newValue: HistoryState[]): void =>{
        dispatch(setHistoric(newValue))
        localStorage.setItem('historic-search', JSON.stringify(newValue))
    }

    return {
        updateLocalHistoric,
        setLocalHistoric
    }
}