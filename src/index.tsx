import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'highlight.js/styles/base16/pasque.css'
import Portfolio from './Portfolio'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
)
