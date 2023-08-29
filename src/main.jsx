import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextWapper from './context/contextWapper.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ContextWapper>
    <App />
  </ContextWapper>
  </React.StrictMode>
)
