import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme.js'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <LanguageProvider>
            <App />
          </LanguageProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
