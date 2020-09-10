import React from "react";

const Greet =(props) => {
    // Here Props are the Objects if we print on console. So we need to return props.name

    console.log(props)
    return <h1> Hello {props.name} </h1>
}

export default Greet