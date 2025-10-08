import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React + Vite + Electron</h1>
      <p>Derleme GitHub Actions ile yapıldı!</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Sayaç: {count}
      </button>
    </div>
  );
}

export default App;
