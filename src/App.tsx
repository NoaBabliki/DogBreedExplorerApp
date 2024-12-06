import React from 'react';
import Home from './components/Home';
import { ThemeProvider } from './components/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
         <Home/>
    </ThemeProvider>
  );
};

export default App;