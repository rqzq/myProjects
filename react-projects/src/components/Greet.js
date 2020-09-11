import React from "react";

const Greet =props => {
    // Here Props are the Objects if we print on console. So we need to return props.name

    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} surname {props.surname}
            </h1>
            {props.children}
        </div>
    )

}

export default Greet