import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/Routes/routes';
import theme from './src/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './src/Components/Header';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}