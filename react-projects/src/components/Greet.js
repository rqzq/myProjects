import React from "react";

const Greet =({name, surname}) => {
    // To Unpack Variables instead of using Props should be declared within {}

    return (
        <div>
            <h1>
                Hello {name} surname {surname}
            </h1>
        </div>
    )

}

export default Greet