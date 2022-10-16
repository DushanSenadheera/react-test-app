import React from "react";

export default function Card(props) {
    return (
        <div className="cards">
            <div className="card" >
                <img src={props.img} alt="card" /> 
                <div>
                    <p className="title" >
                        <span> <img src="star.png" alt="star" />{props.rating}</span> <span className="rating">({props.review}) {props.country}</span>
                    </p>
                    <p className="description" >
                        {props.description}
                        <br />
                        <span>${props.price}</span> / person
                    </p>
                </div>
            </div>
        </div>
    )
}