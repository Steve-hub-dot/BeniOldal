import { Container, Box, Avatar, Typography } from '@mui/material'
import PersonTabs from '../components/PersonTabs.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Home() {
  const { t } = useLanguage()
  const { home } = t
  return (
    <>
      <Container maxWidth="md" sx={{ pt: { xs: 6, sm: 9 }, pb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 4 }}>
          <Avatar
            sx={{
              width: 132,
              height: 132,
              fontSize: '2.4rem',
              fontFamily: "'Fraunces', serif",
              background: 'linear-gradient(135deg, #B8763D, #5C6E52)',
            }}
          >
            N
          </Avatar>
          <Box>
            <Typography sx={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', color: 'secondary.main', mb: 1 }}>
              {home.kicker}
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.1rem', sm: '2.9rem' }, mb: 2 }}>
              {home.title}
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: '52ch', fontSize: '1.08rem' }}>
              {home.lede}
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ py: 5, borderTop: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h2" sx={{ fontSize: '1.6rem', mb: 3 }}>
          {home.aboutTitle}
        </Typography>
        {home.aboutShared.map((para, i) => (
          <Typography
            key={i}
            color="text.secondary"
            sx={{ maxWidth: '62ch', mb: i === home.aboutShared.length - 1 ? 5 : 1.5 }}
          >
            {para}
          </Typography>
        ))}

        <PersonTabs labels={['Beni', 'Andi']}>
          {[
            <Typography color="text.secondary" key="ferj">
              {home.aboutBeni}
            </Typography>,
            <Typography color="text.secondary" key="feleseg">
              {home.aboutAndi}
            </Typography>,
          ]}
        </PersonTabs>
      </Container>
    </>
  )
}
