import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import AboutUs from "../components/AboutUs";

function About (){
    return (
        <>
            <Hero
                cName="heroMid"
                heroImg={ AboutImg }
                title="About"
                btnClass="hide"
            />
            <AboutUs />
        </>
    )
}

export default About;