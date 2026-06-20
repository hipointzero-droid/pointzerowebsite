import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/index.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={routes} />
      <WhatsAppFab />
    </>
  </React.StrictMode>,
)
