import { createMuiTheme } from '@mui/material/styles'

export const MyTheme = createMuiTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '##ffacff',
      main: '##e47afa',
      dark: '##b049c7',
      // contrastText: "#000000",
    },
    secondary: {
      light: '#9affff',
      main: '#61dafb',
      dark: '#10a8c8',
      // contrastText: "#000000",
    },
    background: {
      // default: "#121212",
    },
  },
  typography: {
    button: {
      textTransform: 'none', // Material UIで生成されるボタンの英字が大文字になることを防ぐ
    },
  },
})
