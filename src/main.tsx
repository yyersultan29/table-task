import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>

      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<App />} />
      </Routes>
    </ThemeProvider >

  </BrowserRouter>


)
