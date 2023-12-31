// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config

// 3. extend the theme
export const theme = extendTheme({
  darkmode: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    background: {
      100: '#000000',
    },
  },
});

export default theme;
