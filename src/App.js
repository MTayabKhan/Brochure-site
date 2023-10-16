import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Navbar';
import PageOneContent from './PageOneContent';
import theme from './theme';
import PageTwoContent from './PageTwoContent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <PageOneContent></PageOneContent>
      <PageTwoContent></PageTwoContent>
    </ChakraProvider>
  );
}

export default App;
