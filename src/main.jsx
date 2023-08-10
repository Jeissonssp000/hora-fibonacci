import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { InfoContextProvider } from './context/InfoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoContextProvider>
      <App />
    </InfoContextProvider>
  </React.StrictMode>,
)
