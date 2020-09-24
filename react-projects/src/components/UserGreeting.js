import React, {Component} from "react";

class UserGreeting extends Component{
    constructor() {
        super();
        this.state ={
            isLoggedin: true
        }
    }
    render() {
        if (this.state.isLoggedin){
            return (
                <div> Welcome Bishwajit</div>
            )
        }else {
            return (
                <div> Welcome Guest !</div>
            )
        }
    }
}
export default UserGreeting