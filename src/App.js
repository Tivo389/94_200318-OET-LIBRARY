import React from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars);

function App() {
  return (
    <div className="App">
      <Navigation/>
      <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum,[2][1] commonly known as a tomato plant. The species originated in western South America and Central America.[2][3] The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.[2]<br/>Tomatoes are a significant source of umami flavor.[6] The tomato is consumed in diverse ways, raw or cooked, in many dishes, sauces, salads, and drinks. While tomatoes are fruits—botanically classified as berries—they are commonly used as a vegetable ingredient or side dish.[3]<br/>Numerous varieties of the tomato plant are widely grown in temperate climates across the world, with greenhouses allowing for the production of tomatoes throughout all seasons of the year. Tomato plants typically grow to 1–3 meters (3–10 ft) in height. They are vines that have a weak stem that sprawls and typically needs support.[2] Indeterminate tomato plants are perennials in their native habitat, but are cultivated as annuals. Determinate, or bush, plants are annuals that stop growing at a certain height and produce a crop all at once. The size of the tomato varies according to the cultivar, with a range of 0.5–4 inches (1.3–10.2 cm) in width.[2]</p>
    </div>
  );
}

export default App;
