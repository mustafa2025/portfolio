// @mui
import { createTheme } from '@mui/material/styles';
// common theme options
import commonThemeOptions from 'styles/theme/commonThemeOptions';

const { components: commonComponentsOptions } = commonThemeOptions;

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF3523',
      light: '#FF3523',
      dark: '#B24531',
      contrastText: '#FF3523',
    },
    secondary: {
      main: '#2196F3',
      light: '#4DABF5',
      dark: '#1769AA',
      contrastText: '#FF3523',
    },
    info: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#B2B2B2',
      contrastText: '#FF6347',
    },
    background: {
      default: '#FFFFFF',
      paper: '#fff',
    },
    text: {
      primary: '#FF3523',
      secondary: '#383838',
      disabled: '#777777',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#383838',
        },
      },
    },
    ...commonComponentsOptions,
  },
});

export default lightTheme;
