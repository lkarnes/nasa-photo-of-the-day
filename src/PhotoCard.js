import React from "react";

export default function PhotoCard({img , date, title, expl }){
    
    return(
    <div>
        <div>{title}</div>
        <div>{date}</div>
        <img src={img}/>
        <div>{expl}</div>
    </div>
    );
}