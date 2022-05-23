import {connect} from 'react-redux';
import {ReactComponent as ReactLogo} from "../Resources/pictures/react.svg";
import {ReactComponent as ExpressLogo} from "../Resources/pictures/express.svg";
import {ReactComponent as GithubLogo} from "../Resources/pictures/github.svg";
import {ReactComponent as SquareArrow} from "../Resources/pictures/arrow-square.svg";
import {ReactComponent as DetailCurveWeb} from "../Resources/pictures/detail-curve-web.svg";
import { useEffect } from 'react';

const Project = (props) => {

    let  photo = require("../Resources/pictures/" + props.id + ".png");

    useEffect(() => {
        let dropDown = document.querySelector(`#project${props.id} .drop-down`)
        // let dropDownContent = document.querySelector(`#project${props.id} .drop-down-content`);
        // let height = getComputedStyle(dropDownContent).height;

        dropDown.style.minHeight = 0;
    }, [])


    const toggleDropDown = () => {
        let dropDown = document.querySelector(`#project${props.id} .drop-down`)
        let dropDownContent = document.querySelector(`#project${props.id} .drop-down-content`);
        let dropDownHeight = parseInt(getComputedStyle(dropDownContent).height);
        let posY = dropDown.getBoundingClientRect().top;
        //console.log(posY, dropDownHeight, window.innerHeight)
        
        if(!dropDown.classList.contains("opened")){
            dropDown.style.minHeight = dropDownHeight + "px";
            if(posY + dropDownHeight >= window.innerHeight){
                window.scrollBy({top: dropDownHeight - window.innerHeight + posY + 20, left: 0, behavior: "smooth"});
            }
        }else{
            dropDown.style.minHeight = 0;
        }
        
        dropDown.classList.toggle("opened");
    }

    return(
        <section className="project" id={"project" + props.id}>
            <div className="presentation">
                <div className="infos">
                    <h3>{props.display.content.projects[props.id].title}</h3>
                    <p>{props.display.content.projects[props.id].description}</p>
                </div>
                
                <div className="design">
                    <div className="tech-logos">
                        <div className="react-tech">
                            <ReactLogo/>
                            <p>React</p>
                        </div>
                        {props.express && <div className="express-tech">
                            <ExpressLogo/>
                            <p>Express</p>
                        </div>
                        }
                        
                    </div>
                    <div className="illustration">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="details-content"></div>
                <div className="details-banner">
                    <div className="github-link detail-link">
                        <GithubLogo/>
                        <p>Github</p>
                    </div>
                    <div className="detail-button" onClick={toggleDropDown}>
                        <DetailCurveWeb/>
                        <p>Details</p>
                    </div>
                    <div className="website-link detail-link">
                        <SquareArrow/>
                        <p>{props.display.content.projects.detailBanner.website}</p>
                    </div>
                </div>
                <div className="drop-down">
                    <div className="drop-down-content">
                        <ul>
                            <h4>{props.display.content.projects[props.id].details.features.title}</h4>
                            {props.display.content.projects[props.id].details.features.featureList.map((feature, index) => {
                                return(
                                    <li key={index}>{feature}</li>
                                )
                            })}
                        </ul>
                        <ul>
                            <h4>{props.display.content.projects[props.id].details.tech.title}</h4>
                            {props.display.content.projects[props.id].details.tech.techList.map((feature, index) => {
                                return(
                                    <li key={index}>{feature}</li>
                                )
                            })}
                        </ul>
                    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Project);