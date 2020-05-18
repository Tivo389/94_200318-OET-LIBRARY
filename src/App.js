import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faExternalLinkAlt, faFileAlt, faLanguage, faNewspaper, faVideo, faCalendarAlt, faPlayCircle, faComments, faMapSigns, faWindowRestore, faTimes, faStar, faHorseHead } from '@fortawesome/free-solid-svg-icons'
import SectionPrimary from './components/SectionPrimary';

library.add(faBars, faExternalLinkAlt, faFileAlt, faLanguage, faNewspaper, faVideo, faCalendarAlt, faPlayCircle, faComments, faMapSigns, faWindowRestore, faTimes, faStar, faHorseHead);

function App() {
  const [content, setContent] = useState("carouselPaddle");
  return (
    <div className="App">
      <Navigation setContent={setContent}/>
      <SectionPrimary content={content}/>
    </div>
  );
}

export default App;
