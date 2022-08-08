import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

// Adicionando os tipos de tema ao styled-components
declare module 'styled-components' {
  type ThemeType = typeof defaultTheme
  export interface DefaultTheme extends ThemeType {}
}
