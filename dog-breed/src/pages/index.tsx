import { ThemeProvider } from 'styled-components'
import { Layout } from '../layout'
import { GlobalStyles } from '../styles/GlobalStyles'
import { defaultTheme } from '../styles/theme/default'

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  )
}
