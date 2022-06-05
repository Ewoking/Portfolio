import { useEffect } from 'react';
import {connect} from 'react-redux';
import Project from '../Components/Project';
import SnakeCard from '../Components/SnakeCard';


const Projects = (props) => {

    const responsiveDisplay = () => {
        if (props.media === "DESKTOP") return (<>
            <div className="side-projects">
                <div className="infos">
                    <p className='presentation'>{props.display.content.projects.sideProjects.presentation}</p>
                    <div className="catch-phrase">
                        <p className='catch-phrase'>{props.display.content.projects.sideProjects.snakeCatchPhrase[0]}</p>
                        <p>
                        {props.display.content.projects.sideProjects.snakeCatchPhrase[1]}
                        </p>
                    </div>
                </div>
                <SnakeCard/>
            </div>
        </>)
        if (props.media === "TABLET" || props.media === "MOBILE") return (<>
            <div className="side-projects">
                <div className="infos">
                    <p className='presentation'>{props.display.content.projects.sideProjects.presentation}</p>
                </div>
                <div className="snake-infos">
                    <div className="catch-phrase">
                        <p>{props.display.content.projects.sideProjects.snakeCatchPhrase[0]}</p>
                        <p>
                        {props.display.content.projects.sideProjects.snakeCatchPhrase[1]}
                        </p>
                    </div>
                    <SnakeCard/>
                </div>
            </div>
        </>)
    }

    return(
        <section className="projects" id='projects'>
            <h2>{props.display.content.projects.title}</h2>
            <Project id="project1" express={true} media={props.media} />
            <Project id="project2" media={props.media}/>
            {responsiveDisplay()}
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

export default connect(mapStateToProps,mapDispatchToProps)(Projects);