import React, { Component } from "react";
import AppRoutes from "../../routes/AppRoutes";
import './Main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <section className="">
                    <AppRoutes/>
                </section>
            </>
        );
    }
}

export default Main;