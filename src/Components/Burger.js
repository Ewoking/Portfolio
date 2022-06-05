import {ReactComponent as Home} from "../Resources/pictures/house.svg"
import {ReactComponent as ReactLogo} from "../Resources/pictures/react.svg"
import {ReactComponent as User} from "../Resources/pictures/user.svg"
import {ReactComponent as Envelope} from "../Resources/pictures/envelope.svg"

const Burger = (props) => {
    const scrollTo = (e,id) => {
        e.preventDefault();
        document.querySelector("#" + id).scrollIntoView({behavior: 'smooth'});
    }

    const onToggleBurger = () => {
        let menu = document.querySelector(".burger-menu");
        let lines = document.querySelectorAll(".line");
        let clickCatcher = document.querySelector(".click-catcher");

        lines.forEach(line => {
            line.classList.toggle("cross");
        })
        menu.classList.toggle("closed");
        clickCatcher.classList.toggle("not-displayed");
    }

    return (
        <div className="burger">
            <div className="click-catcher not-displayed" onClick={onToggleBurger}></div>
            <div className="burger-icon" onClick={onToggleBurger}>
                <hr className="line line-1"/>
                <hr className="line line-2"/>
                <hr className="line line-3"/>
            </div>
            <div className="burger-menu closed">
                <div className="burger-menu-button" onClick={(e) => {scrollTo(e,"landing"); onToggleBurger()}}>
                    <Home/>
                </div>
                <div className="burger-menu-button" onClick={(e) => {scrollTo(e,"projects"); onToggleBurger()}}>
                    <ReactLogo/>
                </div>
                <div className="burger-menu-button" onClick={(e) => {scrollTo(e,"about"); onToggleBurger()}}>
                    <User/>
                </div>
                <div className="burger-menu-button" onClick={(e) => {scrollTo(e,"contact"); onToggleBurger()}}>
                    <Envelope/>
                </div>
            </div>
        </div>
    )
}

export default Burger;