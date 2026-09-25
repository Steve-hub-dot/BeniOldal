import { Container, Typography, Box } from '@mui/material'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const points = [
  '[Első konkrét terület vagy tevékenység, amivel a küldetéseteket élitek — pl. egy adott közösség, ország vagy szolgálati forma.]',
  '[Második terület — pl. rendszeres alkalmak, kiutazások, tanítás, segítségnyújtás.]',
  '[Harmadik terület, ha van — pl. hosszú távú terv vagy vízió.]',
]

export default function Misszio() {
  const { t } = useLanguage()
  const { mission } = t
  return (
    <Container maxWidth="md" sx={{ py: 7 }}>
      <Typography variant="h1" sx={{ fontSize: { xs: '1.9rem', sm: '2.4rem' }, mb: 4 }}>
        {mission.title}
      </Typography>
      <Typography sx={{ fontFamily: "'Fraunces', serif", fontSize: '1.4rem', maxWidth: '54ch', mb: 4 }}>
        {mission.statement}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {mission.points.map((p, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'baseline' }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main', flexShrink: 0 }} />
            <Typography color="text.secondary">{p}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}
