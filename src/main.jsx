import React from 'react'
import ReactDOM from 'react-dom/client' // v18

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App'

ReactDOM.createRoot(document.querySelector('#root')).render(<App name="Martin" />)