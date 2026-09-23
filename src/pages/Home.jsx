import { Container, Box, Avatar, Typography } from '@mui/material'
import PersonTabs from '../components/PersonTabs.jsx'

export default function Home() {
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
              Isten kegyelméből
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.1rem', sm: '2.9rem' }, mb: 2 }}>
              Szia, örülök, hogy itt vagy.
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: '52ch', fontSize: '1.08rem' }}>
              Ez az oldal a történetünkről, a szolgálatunkról és arról szól, hogyan tarthatod velünk
              a kapcsolatot — vagy hogyan állhatsz mellénk imában és adományban.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ py: 5, borderTop: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h2" sx={{ fontSize: '1.6rem', mb: 3 }}>
          About us
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: '62ch', mb: 1.5 }}>
          <Box component="strong" sx={{ color: 'text.primary', fontWeight: 600 }}>
            Győri Benjámin és Győri Andrea
          </Box>{' '}
          vagyunk, és [ide kerül röviden, hogy kik vagytok együtt — honnan jöttök, mivel foglalkoztok,
          mi jellemez titeket párként].
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: '62ch', mb: 5 }}>
          [Itt folytathatod: hogyan találkoztatok, család, háttér, hogyan indult el mindaz, amiről ez
          az oldal szól.]
        </Typography>

        <PersonTabs labels={['Győri Benjámin', 'Győri Andrea']}>
          {[
            <Typography color="text.secondary" key="ferj">
              [Ide kerül a férj rövid, személyes bemutatkozása — kicsoda, mivel foglalkozik, mi
              jellemzi őt egyénileg.]
            </Typography>,
            <Typography color="text.secondary" key="feleseg">
              [Ide kerül a feleség rövid, személyes bemutatkozása — kicsoda, mivel foglalkozik, mi
              jellemzi őt egyénileg.]
            </Typography>,
          ]}
        </PersonTabs>
      </Container>
    </>
  )
}
