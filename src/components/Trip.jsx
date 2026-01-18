import TripData from "./TripData"
import "./TripStyles.css"
import CardImg1 from "../assets/5.jpg"
import CardImg2 from "../assets/8.jpg"
import CardImg3 from "../assets/6.jpg"

const Trip = () =>{
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripCardWrapper">
                <TripData  
                    heading="Trip in Indonesia"
                    img1={CardImg1}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <TripData  
                    heading="Trip in Malaysia"
                    img1={CardImg2}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <TripData  
                    heading="Trip in France"
                    img1={CardImg3}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </div>
        </div>
    )
}

export default Trip; 