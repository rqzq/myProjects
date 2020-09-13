import React from "react";

const Greet =props => {
    // To Unpack Variables instead of using Props should be declared within {}

    const {name, surname} = props
    return (
        <div>
            <h1>
                Hello {name} surname {surname}
            </h1>
        </div>
    )

}

export default Greet