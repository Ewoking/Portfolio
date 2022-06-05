import { connect } from 'react-redux'
import {ReactComponent as Home} from "../Resources/pictures/house.svg"
import {ReactComponent as ReactLogo} from "../Resources/pictures/react.svg"
import {ReactComponent as User} from "../Resources/pictures/user.svg"
import {ReactComponent as Envelope} from "../Resources/pictures/envelope.svg"

const Navbar = (props) => {

    const scrollTo = (e,id) => {
        e.preventDefault();
        document.querySelector("#" + id).scrollIntoView({behavior: 'smooth'});
    }

    const onMouseEnter = (e) => {
        // console.log(e.target.children)
        
        e.currentTarget.children[1].classList.remove("nav-hidden");
    }
    const onMouseLeave = (e) => {
        // console.log(e.target.children)
        e.currentTarget.children[1].classList.add("nav-hidden");
    }

    return(
        <div className="navbar-container">
            <nav className="navbar">
                <button className='navbar-button' onClick={(e)=> {scrollTo(e, "landing")}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Home className="navbar-logo home-logo"/>
                    <h4 className='nav-hidden'>{props.display.content.landing.title}</h4>
                </button>
                
                <button className='navbar-button' onClick={(e)=> {scrollTo(e, "projects")}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <ReactLogo className="navbar-logo react-logo"/>
                    <h4 className='nav-hidden'>{props.display.content.projects.title}</h4>
                </button>
                <button className='navbar-button' onClick={(e)=> {scrollTo(e, "about")}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <User className="navbar-logo user-logo"/>
                    <h4 className='nav-hidden'>{props.display.content.about.titleAlt}</h4>
                </button>
                <button className='navbar-button' onClick={(e)=> {scrollTo(e, "contact")}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Envelope className="navbar-logo envelope-logo"/>
                    <h4 className='nav-hidden'>{props.display.content.contact.title}</h4>
                </button>
            </nav>
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

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);