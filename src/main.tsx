import React from 'react'
import ReactDOM from 'react-dom/client'
import { RoutesProvider } from './routes/RoutesProvider'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesProvider />
  </React.StrictMode>,
)
