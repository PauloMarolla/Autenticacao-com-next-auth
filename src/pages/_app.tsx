import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "../styles/globalStyles";
import { defaultTheme } from '../styles/colors'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
