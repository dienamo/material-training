import React from 'react';

import PaperBase from '../components/ui/PaperBase'
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider>
      <PaperBase/>
    </ThemeProvider>
    
  );
}

export default App;
