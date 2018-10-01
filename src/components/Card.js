import React from "react";
import "./Card.css";

const Card = props => {
    return ( 
        <div className="d-inline m-2">
        <img id={props.id} src={props.image} onClick={() => props.handleOnClick(props.id)} className="pic-container rounded img-thumbnail " alt="..." />
        </div>
     );
}
 
export default Card;