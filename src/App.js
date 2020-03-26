import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faExternalLinkAlt, faFileAlt, faLanguage } from '@fortawesome/free-solid-svg-icons'
import SectionPrimary from './components/SectionPrimary';

library.add(faBars, faExternalLinkAlt, faFileAlt, faLanguage);

function App() {
  const [content, setContent] = useState("callToAction");
  return (
    <div className="App">
      <Navigation setContent={setContent}/>
      <SectionPrimary content={content}/>
    </div>
  );
}

export default App;
