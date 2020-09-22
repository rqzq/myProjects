import React, {Component} from "react";

class EventBind extends Component{
    clickHandler(){
        this.setState({
            message: 'Good Bye!'
        })
        console.log(this)
    }
    
// this is by default set to undefined

    constructor() {
        super();
        this.state ={
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    render() {
        return(
            <div>
                <div>
                    {this.state.message}
                </div>
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }
}
export default EventBind