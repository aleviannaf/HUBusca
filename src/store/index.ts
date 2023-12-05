import { configureStore,   } from '@reduxjs/toolkit'
import localStorageMiddleware from './middlewares/localStorageMiddleware'
import historySlice, { loadFromLocalStorage } from './modules/history/historySlice';


export const store = configureStore({
    reducer: {
        history: historySlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

store.dispatch(loadFromLocalStorage());

export type StoreDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>