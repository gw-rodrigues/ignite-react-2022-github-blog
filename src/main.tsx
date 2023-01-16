import React from 'react'
import ReactDOM from 'react-dom/client'
import { BlogProvider } from './contexts/BlogContext'
import { RoutesProvider } from './routes/RoutesProvider'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BlogProvider>
      <RoutesProvider />
    </BlogProvider>
  </React.StrictMode>,
)
