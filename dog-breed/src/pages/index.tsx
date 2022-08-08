import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { GlobalStyles } from '../styles/GlobalStyles'
import { defaultTheme } from '../styles/theme/default'

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  )
}
