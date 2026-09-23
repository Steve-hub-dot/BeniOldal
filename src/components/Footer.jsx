import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 5, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary">
          © [évszám] · [Név] · Készült szeretettel
        </Typography>
      </Container>
    </Box>
  )
}
