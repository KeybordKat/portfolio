import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // invisible component used to identify potential problems
  <StrictMode>
    <App />
  </StrictMode>,
)
