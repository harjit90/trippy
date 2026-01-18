import Hero from "../components/Hero";
import HomeImg from "../assets/12.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";

function Home() {
    return (
        <>
            <Hero
                cName="hero"
                heroImg={HomeImg}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                btnText="Travel Plan"
                url="/service"
                btnClass="show"
            />
            <Destination />
            <Trip />
        </>
    )
}

export default Home;