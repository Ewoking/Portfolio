import { useEffect } from 'react';
import {connect} from 'react-redux';
import upmc from "../Resources/pictures/upmc.png";
import ensam from "../Resources/pictures/ensam.png";
import logo3wa from "../Resources/pictures/3wa.png";
import resume from "../Resources/pictures/resume.png";


const About = (props) => {

    // useEffect(() => {

    //     let test = document.querySelector(".test");
    //     document.querySelector(".target").appendChild(test);

    // }, [])

    return(
        <section className="about" id='about'>
            <h2>{props.display.content.about.title}</h2>
            <div className="about-content">
                <div className="infos">
                    <p>{props.display.content.about.presentation[0]}</p>
                    <p>{props.display.content.about.presentation[1]}</p>
                    <div className="formation-logos">
                        <div className="logo-container">
                            <img src={logo3wa} alt="3wa logo" />
                        </div>
                        <div className="logo-container">
                            <img src={ensam} alt="ensam logo" />
                        </div>
                        <div className="logo-container">
                            <img src={upmc} alt="upmc logo" />
                        </div>
                    </div>
                </div>
                <div className="about-resume">
                    <img src={resume} alt="CV" />
                    <button>{props.display.content.about.download}</button>
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
}

export default connect(mapStateToProps,mapDispatchToProps)(About);