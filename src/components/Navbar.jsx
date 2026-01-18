import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

const Navbar = () => {
    const [isclicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true);
    }
    return (
        <nav className="NavbarItems">
            <Link className="NavbarLogo" to="/">Trippy</Link>
            <div className="menuIcons" onClick={handleClick}>
                <i className={isclicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={isclicked ? "navMenu active" : "navMenu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    )
                })}
                <button className="navBtn">Sign Up</button>
            </ul>
        </nav>
    )
}

export default Navbar;