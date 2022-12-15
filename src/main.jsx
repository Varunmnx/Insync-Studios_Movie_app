import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CardContextProvider from './provider/contextprovider'


ReactDOM.createRoot(document.getElementById('root')).render(
  // provides the current card and function to modify it 
  <CardContextProvider>
    <App />
  </CardContextProvider>
          

)
