import React from "react";


function CardRoom(props){
    return(
        <div className="cardRoom">
            <div className="cardRoom_body">
              <img src={props.img}/>
              <div className="descriptionContainer">
                <h2 className="cardTitle">{props.title}</h2>
                <p className="cardDescription">{props.description}</p>
              </div>
            </div>
        </div>
    )
}
export default CardRoom;