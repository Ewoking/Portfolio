import {connect} from 'react-redux';
import { useEffect, useLayoutEffect, useState } from 'react';
import {switchLanguage, switchTheme} from '../actions/display/displayActions';
import logos from "../Resources/pictures/logos.svg";
import  {ReactComponent as Moon} from "../Resources/pictures/moon.svg";
import {ReactComponent as Sun} from "../Resources/pictures/sun.svg";
import france from "../Resources/pictures/fr.png";
import usUk from "../Resources/pictures/us-uk.png";
import {ReactComponent as Linkedin} from "../Resources/pictures/linkedin.svg";
import {ReactComponent as CaretDown} from "../Resources/pictures/caret-down.svg";
import {ReactComponent as Strip} from "../Resources/pictures/strip.svg";



const Landing = (props) => {

    const [refresh, setRefresh] = useState(false);


    const setHeight = () => {
        // console.log(props.media);
        // Set landing in Fullscreen by default
        let landing = document.querySelector(".landing");
        landing.style.height = window.innerHeight + "px";

        // Get available space
        let computed = getComputedStyle((document.querySelector(".landing-main")));
        let availableSpace = document.querySelector(".landing-main").clientHeight - parseInt(computed.paddingBottom) - parseInt(computed.paddingTop) ;
        // console.log(availableSpace);

        // Check if everything can be displayed, if not, set appropriate height
        let effectiveHeight;
        if(props.media === "DESKTOP") {
            let elem = document.querySelector(".landing-main>div");
            effectiveHeight = elem.scrollHeight;
            // console.log("EFF : ", effectiveHeight);
            if(effectiveHeight > availableSpace){
                landing.style.height = parseInt(landing.style.height) + effectiveHeight - availableSpace + 160 + "px";
                setRefresh(!refresh)
            }
        }else if (props.media === "TABLET" || props.media === "MOBILE"){
            let elem1 = document.querySelector(".landing-main>div");
            let elem2 = document.querySelector(".landing-main>p"); 
            if(!elem1 || !elem2) return;
            // console.log("elem1 : ", elem1.scrollHeight, "elem2 : ", elem2.scrollHeight);
            effectiveHeight = elem1.scrollHeight + elem2.scrollHeight;
            console.log(effectiveHeight);
            console.log(availableSpace);
            if(effectiveHeight > availableSpace - 60){
                landing.style.height = parseInt(landing.style.height) + effectiveHeight - availableSpace + 160 + "px";
                setRefresh(!refresh)
            }
        }
    }

    useEffect(() => {
        // Setting landing screen Height, needed for mobile (navbar issue)
        setHeight();
        window.addEventListener("resize", setHeight);
        window.addEventListener("orientationchange", setHeight);
    
        //lang button init 
        let langIndictaor = document.querySelector(".lang-indicator");
        if(props.display.lang === "en") {
            langIndictaor.classList.add("en-selected");
        }

        return () => {
            window.removeEventListener("resize", setHeight);
            window.removeEventListener("orientationchange", setHeight);
        }
    }, [])

    // useLayoutEffect(() => {
    //     setHeight()
    // })



    


    const onChangeLanguage = () => {
        let langIndictaor = document.querySelector(".lang-indicator");

        if(props.display.lang === "en") {
            langIndictaor.classList.remove("en-selected");
        }else{
            langIndictaor.classList.add("en-selected");
        }
        props.switchLanguage();
    }

    const onChangeTheme = () => {
        document.querySelector(".moon-logo").classList.toggle("theme-selected");
        document.querySelector(".sun-logo").classList.toggle("theme-selected");
        document.querySelector(".theme-indicator").classList.toggle("theme-selected");
    
        if(!props.display.darkMode) {
            document.documentElement.style.setProperty('--primary', '#3E2C97');
            document.documentElement.style.setProperty('--secondary', '#242424');
            document.documentElement.style.setProperty('--highlight', '#FFC053');
            document.documentElement.style.setProperty('--background', '#313131');
            document.documentElement.style.setProperty('--font', '#F3F3F3');
            document.documentElement.style.setProperty('--contrast', '#BFBBED');
        }else {
            document.documentElement.style.setProperty('--primary', '#C13333');
            document.documentElement.style.setProperty('--secondary', 'white');
            document.documentElement.style.setProperty('--highlight', '#FFC053');
            document.documentElement.style.setProperty('--background', '#F3F3F3');
            document.documentElement.style.setProperty('--font', '#535250');
            document.documentElement.style.setProperty('--contrast', '#ffc7be');
        }
        props.switchTheme();
    }
    
    const scrollTo = (e,id) => {
        e.preventDefault();
        document.querySelector("#" + id).scrollIntoView({behavior: 'smooth'});
    }

    const onMouseEnter = () => {
        document.querySelector(".caret-down").classList.add("hovering");
    }

    const onMouseLeave = () => {
        document.querySelector(".caret-down").classList.remove("hovering");
    }

    const responsiveDisplay = () => {
        if(props.media === "DESKTOP") return (
            <div className="landing-main">
                <div>
                    <h1>Thomas<br/>Tenot</h1>
                    <h3>{props.display.content.landing.subtitle}</h3>
                    <p>{props.display.content.landing.description}</p>
                </div>
                <img src={logos} alt={props.display.content.landing.logosAlt} />
            </div>
        )
        if(props.media === "TABLET" || props.media === "MOBILE") return (
            <div className="landing-main">
                <div>
                    <div>
                        <h1>Thomas<br/>Tenot</h1>
                        <h3>{props.display.content.landing.subtitle}</h3>
                    </div>
                    <img src={logos} alt={props.display.content.landing.logosAlt} />
                </div>
                <p>{props.display.content.landing.description}</p>
            </div>
        )
    }
    
    return (
        <section className="landing" id="landing">
            {responsiveDisplay()}
            <div className="landing-banner">
                <div className="controls">
                    <div className="theme-btn" onClick={onChangeTheme}>
                        <Moon className="moon-logo theme-logo"/>
                        <Sun className="sun-logo theme-logo theme-selected"/>
                        <div className="theme-indicator"></div>
                    </div>
                    <div className="language-btn" onClick={onChangeLanguage}>
                        <img id='flag-id-fr' src={france} alt="" />
                        <img id='flag-id-en' src={usUk} alt="" />
                        <div className="lang-indicator"></div>
                    </div>
                </div>
                <div className="see-work-container" onClick={(e)=> {scrollTo(e, "projects")}}>
                    <div className="strip-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Strip className="strip"/>
                        {/* <div className="circle"></div> */}
                        <p>{props.display.content.landing.seeWork}</p>
                        <CaretDown className="caret-down"/>
                    </div>
                        
                </div>
                    <div className="linkedin-btn" onClick={()=>{window.location.href = 'https://www.linkedin.com/in/thomas-tenot-249a38210/'}}>
                        <p>{props.display.content.landing.linkedin}</p>
                        <Linkedin className="linkedin-logo"/>
                    </div>
            </div>
        </section>
    )
}

const mapStateToProps = (store) => {
    return {
        display: store.display
    }
}

const mapDispatchToProps = {
    switchTheme,
    switchLanguage
}

export default connect(mapStateToProps,mapDispatchToProps)(Landing);


