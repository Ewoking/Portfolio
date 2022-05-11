import {Link} from 'react-router-dom'

import {ReactComponent as Home} from "../Resources/pictures/house.svg"
import {ReactComponent as ReactLogo} from "../Resources/pictures/react.svg"
import {ReactComponent as User} from "../Resources/pictures/user.svg"
import {ReactComponent as Envelope} from "../Resources/pictures/envelope.svg"

const Navbar = (props) => {

    const scrollTo = (e,id) => {
        e.preventDefault();
        document.querySelector("#" + id).scrollIntoView({behavior: 'smooth'});
    }

    return(
        <div className="navbar-container">
            <nav className="navbar">
                <button className='navbar-button' onClick={(e)=> {scrollTo(e, "landing")}}>
                    <Home className="navbar-logo home-logo"/>
                </button>
                
                <button className='navbar-button' onClick={(e)=> {scrollTo(e, "projects")}}>
                    <ReactLogo className="navbar-logo react-logo"/>
                </button>
                <button className='navbar-button' onClick={(e)=> {scrollTo(e, "about")}}>
                    <User className="navbar-logo user-logo"/>
                </button>
                <button className='navbar-button' onClick={(e)=> {scrollTo(e, "contact")}}>
                    <Envelope className="navbar-logo envelope-logo"/>
                </button>
            </nav>
        </div>
    )
}

export default Navbar;