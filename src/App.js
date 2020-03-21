import React, { useState } from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import PrimarySection from './components/PrimarySection';

library.add(faBars);

function App() {
  const [content, setContent] = useState("alpha");
  return (
    <div className="App">
      <Navigation/>
      <main>
        <PrimarySection content={content}/>
        <button onClick={() => setContent("alpha")}>Switch Alpha</button>
        <button onClick={() => setContent("beta")}>Switch Beta</button>
      </main>
    </div>
  );
}

export default App;
