import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('site-lang') || 'hu'
    } catch {
      return 'hu'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('site-lang', lang)
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
    document.documentElement.lang = lang
  }, [lang])

  const value = { lang, setLang, t: translations[lang] }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
