import React from "react";
import Card from "./Card";


const CardList = props => {
    return ( 
        props.images.map(image => (
            <Card 
            handleOnClick={props.handleOnClick}
            key={image.id}
            id={image.id}
            image={image.image}
            />
            ))
     );
}
 
export default CardList;