import React,{ Component } from "react";

class Welcome extends Component{
    render(){
        const {name, fullname} =this.props
        return (
            <div>
                <h1>
                    Welcome Mr {name} a.k.a {fullname}
                </h1>
                {this.props.children}
            </div>

        )
    }
}
export default Welcome