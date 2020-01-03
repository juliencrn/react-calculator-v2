import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './components/Calculator'
import * as serviceWorker from './serviceWorker'
import baseTheme from './theme'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import FreeCodeCamp from './Freecodecamp'

const theme = createMuiTheme(baseTheme)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      <FreeCodeCamp />
      <Calculator />
    </>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
