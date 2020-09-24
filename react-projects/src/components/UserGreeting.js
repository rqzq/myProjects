import React, {Component} from "react";

class UserGreeting extends Component{
    constructor() {
        super();
        this.state ={
            isLoggedin: false
        }
    }
    render() {
        return this.state.isLoggedin ? (
            <div> Welcome BS</div>
        ) :(
            <div> Welcome Guest</div>
        )
        }
    }

export default UserGreeting