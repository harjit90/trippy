import "./TripStyles.css"

const TripData = (props) =>{
    return(
        <div className="tripCard">
            <div className="tripImg">
                <img alt="TripImg" src={props.img1}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default TripData;