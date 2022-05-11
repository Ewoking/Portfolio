import {connect} from 'react-redux';
import {ReactComponent as ReactLogo} from "../Resources/pictures/react.svg";
import {ReactComponent as ExpressLogo} from "../Resources/pictures/express.svg";
import {ReactComponent as GithubLogo} from "../Resources/pictures/github.svg";
import {ReactComponent as SquareArrow} from "../Resources/pictures/arrow-square.svg";
import {ReactComponent as DetailCurveWeb} from "../Resources/pictures/detail-curve-web.svg";

const Project = (props) => {

    let  photo = require("../Resources/pictures/" + props.id + ".png");

    return(
        <section className="project">
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
                    <div className="detail-button">
                        <DetailCurveWeb/>
                        <p>Details</p>
                    </div>
                    <div className="website-link detail-link">
                        <SquareArrow/>
                        <p>{props.display.content.projects.detailBanner.website}</p>
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