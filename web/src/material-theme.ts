import { createTheme } from '@mui/material/styles'
import { green, grey } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary']
  }
  interface PaletteOptions {
    black: PaletteOptions['primary']
  }

  interface PaletteColor {
    darker?: string
  }
  interface SimplePaletteColorOptions {
    darker?: string
  }
}

export default createTheme({
  palette: {
    primary: green,
    black: '#000',
  },
})
