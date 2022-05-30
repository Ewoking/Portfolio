// import {useState, useEffect} from 'react';

import './App.css';
import Navbar from './Components/Navbar';
// import * as l from './Resources/languages';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Landing from './Sections/Landing';
import Projects from './Sections/Projects';




function App() {

  // const [lang, setLang] = useState(document.querySelector('html').lang || "en");

  return (
    <div className="App">
      <Landing/>
      <Navbar/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
