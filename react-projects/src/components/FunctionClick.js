import React from "react";

// ClickHandler is not calling the function, whereas clickHandler() is calling the function.
// so we dont need to use clickHandler()
// Event Handler is a Function not a Function Call.
// If we use Function call, event will be triggered automatically however if we click no response would be there.

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