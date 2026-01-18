import Hero from "../components/Hero";
import ServiceImg from "../assets/2.jpg";
import Trip from "../components/Trip";

function Service (){
    return (
        <>
            <Hero
                cName="heroMid"
                heroImg={ ServiceImg }
                title="Service"
                btnClass="hide"
            />
            <Trip />
        </>
    )
}

export default Service;