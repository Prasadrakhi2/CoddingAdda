import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "./theme.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);