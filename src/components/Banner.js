import React from "react";



const Banner = (props) => {
    return (
   <div>
    <h1 className="title">{props.title}</h1>
    <div className="desc">{props.desc}</div>
   </div>
    )
}

export default Banner