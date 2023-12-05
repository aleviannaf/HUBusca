import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export interface HistoryState {
    id: string
    search: string
    timestamp: string
}

const initialState: HistoryState[] = []

const historySlice =  createSlice({
    name: 'history',
    initialState,
    reducers: {
        historyAdded: {
            reducer(state, action: PayloadAction<HistoryState>) {
                state.unshift(action.payload)
            },
            prepare(search: string) {
                return {
                    payload: {
                        id:  uuidv4(),
                        search,
                        timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
                    }
                }
            }
        },
        loadFromLocalStorage: () => {
            const dataFromLocalStorage = JSON.parse(localStorage.getItem('historic-search') || '[]');
            return dataFromLocalStorage;
        },
        setHistoric: (state, action: PayloadAction<HistoryState[]>) => {
            state.splice(0, state.length, ...action.payload);
        }
    }
})

export const { historyAdded, loadFromLocalStorage, setHistoric} = historySlice.actions
export default historySlice.reducer