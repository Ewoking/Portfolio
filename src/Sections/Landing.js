import {connect} from 'react-redux';
import { useEffect } from 'react';
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

    useEffect(() => {
        let langIndictaor = document.querySelector(".lang-indicator");
        if(props.display.lang === "en") {
            langIndictaor.classList.add("en-selected");
        }
    }, [])

    const onChangeLanguage = () => {
        let langIndictaor = document.querySelector(".lang-indicator");

        if(props.display.lang === "en") {
            langIndictaor.classList.remove("en-selected");
        }else{
            langIndictaor.classList.add("en-selected");
        }
        props.switchLanguage();
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
    
    return (
        <section className="landing" id="landing">
            <div className="landing-main">
                <div>
                    <h1>Thomas<br/>Tenot</h1>
                    <h3>{props.display.content.landing.subtitle}</h3>
                    <p>{props.display.content.landing.description}</p>
                </div>
                <img src={logos} alt={props.display.content.landing.logosAlt} />
            </div>
            <div className="landing-banner">
                <div className="controls">
                    <div className="theme-btn">
                        <Moon className="moon-logo theme-logo"/>
                        <Sun className="sun-logo theme-logo"/>
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
                <div className="linkedin-btn">
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


