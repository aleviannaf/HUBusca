import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <QueryClientProvider client={query}>
      <GlobalStyles/>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
