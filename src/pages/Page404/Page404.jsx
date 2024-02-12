import React, { Component } from "react";

class Page404 extends Component {
   constructor(props){
    super(props);
    this.state = props;
   }
    render() {
        return (
            <>
                <h1> 404 - Page not found!</h1>
                <p>Return to <a href={this.state.item}>{this.state.item.toUpperCase()}</a></p>
            </>
        );
    }
}

export default Page404;