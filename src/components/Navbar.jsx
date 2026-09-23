import { AppBar, Toolbar, Box, Button, Container } from '@mui/material'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Főoldal' },
  { to: '/bizonysagtetel', label: 'Bizonyságtétel' },
  { to: '/misszio', label: 'Misszió' },
  { to: '/ajanlasok', label: 'Ajánlások' },
  { to: '/infok', label: 'Infók' },
]

export default function Navbar() {
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
            Név
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
