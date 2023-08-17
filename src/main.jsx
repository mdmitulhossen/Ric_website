import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../dist/output.css'
import { ModalProvider } from './Context/ModalContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ModalProvider>

)
