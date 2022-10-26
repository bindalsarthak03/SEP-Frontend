import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Landing />
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
