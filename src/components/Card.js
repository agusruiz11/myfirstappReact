import React from "react"
import img from "../img/Fill 219.png";

export default function Card (props) {
    return (
        <div className="Places">
            <img src={props.image} className="cardImg" alt=""/>
            <div className="placeInfo">
                <img src={img} className="logoSpot" alt="spot"/>
                <span>{props.location}</span>
                <a className="url" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <p className="cardTitle">{props.title}</p>
            <p className="date">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
            <hr/>
        </div>
    )
}


