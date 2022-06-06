import { useEffect, useState } from 'react';
import './App.css';

import Burger from './Components/Burger';
import Navbar from './Components/Navbar';
// import * as l from './Resources/languages';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Landing from './Sections/Landing';
import Projects from './Sections/Projects';




function App() {

  const mediaQuery = () => {
    
    // if (window.matchMedia("(max-width:700px)").matches || window.matchMedia("(max-width:1200px) and (orientation:landscape)").matches ) return "MOBILE";
    if (window.matchMedia("(max-device-width:700px)").matches) return "MOBILE";
    if (window.matchMedia("(max-device-width:1200px)").matches) return "TABLET";
    if (window.matchMedia("(max-width:700px)").matches) return "MOBILE";
    if (window.matchMedia("(max-width:1200px)").matches) return "TABLET";
    return "DESKTOP";
  }

  const [media,setMedia] = useState(mediaQuery);

  useEffect(() => {
    window.addEventListener("resize", () => {setMedia(mediaQuery)});
    window.addEventListener("orientationchange", () => {setMedia(mediaQuery)});

    return () => {
      window.removeEventListener("resize", () => {setMedia(mediaQuery)});
      window.removeEventListener("orientationchange", () => {setMedia(mediaQuery)});
    }
  }, [])




  return (
    <div className="App">
      {media !== "DESKTOP" && <Burger/>}
      <Landing media={media}/>
      <Navbar media={media}/>
      <Projects media={media}/>
      <About media={media}/>
      <Contact media={media}/>
    </div>
  );
}

export default App;
