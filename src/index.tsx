import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

import App from './App'
import { COLOR_DARK, COLOR_EXTRADARK } from './constants'
import { extradarkToDark } from './utils/colorUtils'

import './index.css'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}

const decorativeColor = localStorage.getItem('decorativeColor') || COLOR_DARK
const decorativeColorDark = extradarkToDark(decorativeColor)

const theme = createTheme({
  palette: {
    primary: {
      main: decorativeColorDark,
    },
    secondary: {
      main: COLOR_EXTRADARK,
    },
  },
})

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)
