import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyte from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
<BrowserRouter>
  <Routes/>
</BrowserRouter>
<GlobalStyte/>
</>
);

export default App;
