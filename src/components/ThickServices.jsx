import React from "react";
import thick from '../img/checked.png'

function Check(props){
    return(
        <div className="checkService">
            <img src={thick}/>
            <p>{props.service}</p>
        </div>
    )
}

export default Check;