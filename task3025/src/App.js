import React from 'react';
import { olympicGamesResult } from './olympicGamesResult';
import CountryResults from './components/CountryResults';

function App() {
  return (
    <div>
      <CountryResults {...olympicGamesResult[0]}/>
      <CountryResults {...olympicGamesResult[1]}/>
      
    </div>
  );
}

export default App;
