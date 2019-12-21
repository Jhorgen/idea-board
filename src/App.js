import React from 'react';
import { Ideas } from './components/IdeasContainer.js';


function App() {
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <div className="App-header">
        <h1>Idea Board</h1>
      </div>
      <Ideas />
    </div>
  );
}

export default App;
