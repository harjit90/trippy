import "./HeroStyles.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
    return (
        <>
            <div className={props.cName}>
                <img alt="Hero Image" src={props.heroImg} />
            </div>

            <div className="heroText">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to={props.url} className={props.btnClass}>{props.btnText}</Link>
            </div>
        </>
    )
}

export default Hero;