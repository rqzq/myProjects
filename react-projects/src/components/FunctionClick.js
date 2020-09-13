import React from "react";

// ClickHandler is not calling the function, whereas clickHandler() is calling the function.
// so we dont need to use clickHandler()

function FunctionClick() {
    function clickHandler() {
        console.log("Button Clicked")
    }
    return (
        <div>
        <button onClick={clickHandler}>
            Click
        </button>
    </div>
    )
}

export default FunctionClick