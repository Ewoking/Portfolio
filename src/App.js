import {useState, useEffect} from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import * as l from './Resources/languages';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Landing from './Sections/Landing';
import Projects from './Sections/Projects';




function App() {

  const [lang, setLang] = useState(document.querySelector('html').lang || "en");

  useEffect(() => {
    if(! l[lang]){
      setLang('en');
      console.log('language not found');
    }
  }, [lang]);

  let changeLanguage = () => {
    if(lang === 'en'){
      setLang('fr');
      return;
    }
    setLang('en');
  }

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
