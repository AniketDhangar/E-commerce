import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import CounterStore from './Counter/Redux/CounterStore.js'
import { store } from './reduxwork/store/store.js'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
// import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    <Toaster/>  
  </Provider>  
  
  </BrowserRouter>
 
)
