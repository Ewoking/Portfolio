import { connect } from "react-redux";
import  SnakePic from "../Resources/pictures/snake.png";
import {ReactComponent as GithubLogo} from "../Resources/pictures/github.svg";

const SnakeCard = (props) => {
    return(
        <div className="snake-card">
            <h4>Snake</h4>
            <div className="snake-illustration">
                <img src={SnakePic} alt={props.display.content.projects.sideProjects.snakeCard.snakeAlt} />
                <a href={props.display.content.projects.sideProjects.snakeCard.links.website}>
                    <div className="circle"></div>
                </a>
            </div>
            <a href={props.display.content.projects.sideProjects.snakeCard.links.github}>
                <div className="github-link">
                    <GithubLogo/>
                    <p>Github</p>
                </div>
            </a>
            <p>Details:<br/>
            {props.display.content.projects.sideProjects.snakeCard.details}</p>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        display: store.display
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(SnakeCard);