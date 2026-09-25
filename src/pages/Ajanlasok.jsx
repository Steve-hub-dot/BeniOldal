import { Container, Typography, Box } from '@mui/material'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const recs = [
  {
    quote: '[Ide kerül egy ajánlás szövege, miért bízik meg valaki ebben a szolgálatban, mit tapasztalt.]',
    who: '[Ajánló neve, beosztása vagy közössége]',
  },
  {
    quote: '[Második ajánlás szövege.]',
    who: '[Ajánló neve, beosztása vagy közössége]',
  },
]
 
export default function Ajanlasok() {
  const {t} = useLanguage()
  return (
    <Container maxWidth="md" sx={{ py: 7 }}>
      <Typography variant="h1" sx={{ fontSize: { xs: '1.9rem', sm: '2.4rem' }, mb: 2 }}>
        {t.recommendations.title}
      </Typography>
      <Typography color="text.secondary" sx={{ maxWidth: '60ch', mb: 4 }}>
        {t.recommendations.intro}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {t.recommendations.items.map((r, i) => (
          <Box
            key={i}
            sx={{
              pb: 3,
              borderBottom: i < recs.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
            }}
          >
            <Typography sx={{ maxWidth: '58ch' }}>„{r.quote}”</Typography>
            <Typography color="secondary.main" sx={{ mt: 1, fontSize: '0.92rem' }}>
              {r.who}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}
