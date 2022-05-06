import {useState, useEffect} from 'react';

import './App.css';
import * as l from './Resources/languages';
import Landing from './Sections/Landing';
import Projects from './Sections/Projects';



function App() {

  const [lang, setLang] = useState(document.querySelector('html').lang || "en");

  useEffect(() => {
    if(! l[lang]){
      setLang('en');
      console.log('language not found');
    }
  }, []);

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
      <Projects/>
      <p>coucou pas landing</p>
    </div>
  );
}

export default App;
