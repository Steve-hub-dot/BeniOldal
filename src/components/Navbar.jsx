import { AppBar, Toolbar, Box, Button, Container } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'



export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
const links = [
  { to: '/', label: t.nav.home },
  { to: '/bizonysagtetel', label: t.nav.testimony },
  { to: '/misszio', label: t.nav.mission },
  { to: '/ajanlasok', label: t.nav.recommendations },
  { to: '/infok', label: t.nav.info },
]
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(251,247,241,0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap', py: 1 }}>
          <Box sx={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: '1.15rem' }}>
            {t.nav.brand}
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, overflowX: 'auto' }}>
            {links.map((l) => (
              <Button
                key={l.to}
                component={NavLink}
                to={l.to}
                end={l.to === '/'}
                sx={{
                  color: 'text.secondary',
                  textTransform: 'none',
                  fontSize: '0.92rem',
                  borderBottom: '2px solid transparent',
                  borderRadius: 0,
                  px: 1.2,
                  '&.active': { color: 'text.primary', borderColor: 'primary.main' },
                }}
              >
                {l.label}
              </Button>
            ))}
            <Box sx={{ display: 'flex', gap: 0.25, ml: 1, borderLeft: '1px solid', borderColor: 'divider', pl: 1 }}>
              <Button
                size="small"
                onClick={() => setLang('hu')}
                sx={{
                  minWidth: 34,
                  fontSize: '0.8rem',
                  color: lang === 'hu' ? 'text.primary' : 'text.secondary',
                  fontWeight: lang === 'hu' ? 700 : 400,
                }}
              >
                HU
              </Button>
              <Button
                size="small"
                onClick={() => setLang('en')}
                sx={{
                  minWidth: 34,
                  fontSize: '0.8rem',
                  color: lang === 'en' ? 'text.primary' : 'text.secondary',
                  fontWeight: lang === 'en' ? 700 : 400,
                }}
              >
                EN
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
