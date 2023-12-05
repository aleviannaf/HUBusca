import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import GlobalStyles from './styles/GlobalStyles'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <Provider store={store}>
     <QueryClientProvider client={query}>
      <GlobalStyles/>
    <App />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
