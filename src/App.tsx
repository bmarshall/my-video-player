import React from 'react';
import './App.css';
import { HlsJsPlayer } from './components/HlsJsPlayer';
import { MyHlsPlayer } from './components/MyHlsPlayer';

function App() {
  return (
    <div className="App">
      {false && <HlsJsPlayer />  }
      <MyHlsPlayer/>
    </div>
  );
}

export default App;
