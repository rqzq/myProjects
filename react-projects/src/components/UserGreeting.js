import React, {Component} from "react";

class UserGreeting extends Component{
    constructor() {
        super();
        this.state ={
            isLoggedin: true
        }
    }
    render() {
        return this.state.isLoggedin && <div> Welcome Bishwajit</div>
        }
    }

export default UserGreeting