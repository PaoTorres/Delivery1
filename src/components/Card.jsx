import React from "react";
import "../style.css"

const Card = ({title, datos, color})=>{
 return(
   <div className="card" style={color}>
     <h3>{title}</h3>
     <h6> {datos}</h6>
    </div>  
  )
}

export default Card;