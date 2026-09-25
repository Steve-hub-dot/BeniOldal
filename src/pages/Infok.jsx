import { Container, Typography, Box, Paper, Divider } from '@mui/material'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const rows = [
  { label: 'Kedvezményezett', value: '[Név / szervezet]' },
  { label: 'Bankszámlaszám', value: '[XX XXXX XXXX XXXX XXXX]' },
  { label: 'IBAN', value: '[HU00 0000 0000 0000 0000]' },
  { label: 'Közlemény', value: '[pl. Adomány]' },
]

export default function Infok() {
  const { t } = useLanguage()
  const { info } = t
  return (
    <Container maxWidth="md" sx={{ py: 7 }}>
      <Typography variant="h1" sx={{ fontSize: { xs: '1.9rem', sm: '2.4rem' }, mb: 2 }}>
        {info.title}
      </Typography>
      <Typography color="text.secondary" sx={{ maxWidth: '60ch', mb: 4 }}>
        {info.intro}
      </Typography>
      <Paper
        elevation={0}
        sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 4 }}
      >
        <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center', mb: 4 }}>
          <Box
            sx={{
              width: 96,
              height: 96,
              border: '1.5px dashed',
              borderColor: 'divider',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: '0.7rem',
              color: 'text.secondary',
              flexShrink: 0,
              p: 1,
            }}
          >
            {info.qrPlaceholder}
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 500, mb: 0.5 }}>{info.qrTitle}</Typography>
            <Typography color="text.secondary" variant="body2">
              {info.qrText}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Typography sx={{ fontWeight: 500, mb: 2 }}>{info.bankTitle}</Typography>
        {info.rows.map((row, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 1.5,
              py: 1.1,
              borderBottom: i < rows.length - 1 ? '1px dashed' : 'none',
              borderColor: 'divider',
            }}
          >
            <Typography color="text.secondary" variant="body2">
              {row.label}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, textAlign: 'right' }}>
              {row.value}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Container>
  )
}
