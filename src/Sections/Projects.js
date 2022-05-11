import { useEffect } from 'react';
import {connect} from 'react-redux';
import Project from '../Components/Project';
import SnakeCard from '../Components/SnakeCard';


const Projects = (props) => {

    // useEffect(() => {

    //     let test = document.querySelector(".test");
    //     document.querySelector(".target").appendChild(test);

    // }, [])

    return(
        <section className="projects" id='projects'>
            <h2>{props.display.content.projects.title}</h2>
            <Project id="project1" express={true} />
            <Project id="project2"/>
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