import { Box, Container, Typography } from '@mui/material'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const {t} = useLanguage()
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 5, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary">
          {t.footer}
        </Typography>
      </Container>
    </Box>
  )
}
