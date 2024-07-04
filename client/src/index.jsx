import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const spa = document.querySelector("spa");
const root = ReactDOM.createRoot(spa);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
