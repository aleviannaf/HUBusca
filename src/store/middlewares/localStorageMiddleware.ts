import { Middleware } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../modules/history/historySlice';


const localStorageMiddleware: Middleware = (storeApi) => (next) => (action) => {
  if (action.type === 'LOAD_FROM_LOCAL_STORAGE') {
    if (window.localStorage) {
      const data = localStorage.getItem('historic-search');
      if (data) {
        const parsedData = JSON.parse(data);
        storeApi.dispatch(loadFromLocalStorage(parsedData)); 
      }
    }
  }

  return next(action);
};

export default localStorageMiddleware;