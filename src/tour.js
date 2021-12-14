import React, { useState } from "react";
import "./tour.css";

const Tour=({id,image,info,price,name,removeTour})=>{

    const[readMore,setReadMore]=useState(false);
  
    return(

        <div className="tourContainer">
            <img alt={name} src={image} className="image"/>
            <div className="titlePrice">
                <h4 className="title">{name} </h4>
                <p className="price">${price}</p>
            </div>
            <p className="info">{
                readMore? info: `${info.substring(0,200)}...`
            
            } 
            <span >
                <button style={{color:"rgb(135,206,235)", cursor:"pointer",
                 border:'0px',backgroundColor:"white"}}
                onClick={()=>{
                    setReadMore(!readMore)

                }}
                >{!readMore?'Read more':'Show less'}</button>
                </span>
            
            </p>
            <button className="button" onClick={()=>removeTour(id)} >Not Interested</button>
        </div>
    );
}

export default Tour;