import React,{ Component } from "react";

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    changeState(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        }),() =>console.log(this.state.count))
    }
    render(){
        return (
            <div>
                <h1>
                    Count-{this.state.count}
                </h1>
                <button onClick={() =>this.changeState()}>
                    Increment
                </button>
            </div>

        )
    }
}
export default Counter