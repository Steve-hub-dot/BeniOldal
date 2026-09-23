import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: { default: '#FBF7F1', paper: '#FFFEFC' },
    text: { primary: '#2B2620', secondary: '#5C5346' },
    primary: { main: '#B8763D' },
    secondary: { main: '#5C6E52' },
    divider: '#E3D8C4',
  },
  typography: {
    fontFamily: "'Public Sans', sans-serif",
    h1: { fontFamily: "'Fraunces', serif", fontWeight: 500 },
    h2: { fontFamily: "'Fraunces', serif", fontWeight: 500 },
    h3: { fontFamily: "'Fraunces', serif", fontWeight: 500 },
  },
  shape: { borderRadius: 4 },
})

export default theme
